<?php
namespace api\modules\v1\models;

use yii\db\ActiveRecord;

class Cat  extends ActiveRecord {
    public static function tableName()
    {
        return '{{%cat}}';
    }

    /*public function rules()
    {
        return [['description', 'contact_id', 'photo', 'status'], 'required'];
    }*/

    public function fields()
    {
        return [
            'id',
            'description',
            'status',
            'contact' => function() {
                $customer = Contact::find()
                    ->where(['id' => $this->contact_id])
                    ->one();
                return array(
                    'name' => $customer['name'],
                    'phone' => $customer['phone'],
                    'email' => $customer['email']
                    );
            },
            'photo' => function () {
                $photo_ids = !is_null($this->photo) ? $this->pgArrayToPhp($this->photo) : NULL;
                $photo = array();
                if(!is_null($photo_ids)) {
                    foreach($photo_ids as $id) {
                        $photo[] = 'http://local.fastdev2.com/api/web/resource/images/'.$id.'.png';
                    }
                } else {
                    $photo[] = 'http://local.fastdev2.com/api/web/resource/images/no_photo.jpeg';
                }
                return $photo;
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

}
