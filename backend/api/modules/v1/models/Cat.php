<?php

namespace api\modules\v1\models;

use Yii;

/**
 * This is the model class for table "cat".
 *
 * @property integer $id
 * @property string $description
 * @property integer $contact_id
 * @property string $photo
 * @property boolean $status
 *
 * @property Contact $contact
 */
class Cat extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'cat';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['contact_id'], 'required'],
            [['contact_id'], 'integer'],
            [['photo'], 'string'],
            [['status'], 'boolean'],
            [['description'], 'string', 'max' => 256]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'description' => 'Description',
            'contact_id' => 'Contact ID',
            'photo' => 'Photo',
            'status' => 'Status',
        ];
    }

    public function fields()
    {
        return [
            'id',
            'description',
            'status',
            'contact' => function () {
                $customer = Contact::find()
                    ->where(['id' => $this->contact_id])
                    ->one();
                return array(
                    'name' => $customer['name'],
                    'phone' => $customer['phone'],
                    'email' => $customer['email']
                );
            },
            'photo',
            'photo_url' => function () {
                $photo_ids = !is_null($this->photo) ? $this->pgArrayToPhp($this->photo) : NULL;
                $photo_url = array();
                if (!is_null($photo_ids)) {
                    foreach ($photo_ids as $id) {
                        $photo_url[] = 'http://fastdev2.local.com/api/web/resource/images/' . $id . '.png';
                    }
                } else {
                    $photo_url[] = 'http://fastdev2.local.com/api/web/resource/images/no_photo.jpeg';
                }
                return $photo_url;
            },
        ];
    }

    function pgArrayToPhp($text) {
        if(is_null($text)) {
            return array();
        } else if(is_string($text) && $text != '{}') {
            $text = substr($text, 1, -1);// Removes starting "{" and ending "}"
            if(substr($text, 0, 1) == '"') {
                $text = substr($text, 1);
            }
            if(substr($text, -1, 1) == '"') {
                $text = substr($text, 0, -1);
            }
            // If double quotes are present, we know we're working with a string.
            if(strstr($text, '"')) { // Assuming string array.
                $values = explode('","', $text);
            } else { // Assuming Integer array.
                $values = explode(',', $text);
            }
            $fixed_values = array();
            foreach($values as $value) {
                $value = str_replace('\\"', '"', $value);
                $fixed_values[] = $value;
            }
            return $fixed_values;
        } else {
            return array();
        }
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getContact()
    {
        return $this->hasOne(Contact::className(), ['id' => 'contact_id']);
    }
}
