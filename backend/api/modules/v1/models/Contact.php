<?php
namespace api\modules\v1\models;

use yii\db\ActiveRecord;

class Contact  extends ActiveRecord {
    public static function tableName()
    {
        return '{{%contact}}';
    }

    public function rules()
    {
        return [['name', 'phone', 'email'], 'required'];
    }

    public function fields()
    {
        return [
            'id',
            'name',
            'phone',
            'email',
        ];
    }
}
