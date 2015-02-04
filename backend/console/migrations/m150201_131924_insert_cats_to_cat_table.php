<?php

use yii\db\Schema;
use yii\db\Migration;

class m150201_131924_insert_cats_to_cat_table extends Migration
{
    public function up()
    {
        $this->insert('{{%cat}}', array(
            "id" => "1",
            "description" => "Кот Вася ищет себе дом. Возраст 1 год. Порода: неизвестна",
            "contact_id" => 1,
            "photo"=> NULL,
            "status" => TRUE
        ));
        $this->insert('{{%cat}}', array(
            "id" => "2",
            "description" => "Кошечка Дуся ищет себе дом. Возраст 7 месяц. Порода: сибирская",
            "contact_id" => 3,
            "photo"=> "{2, 3, 4}",
            "status" => TRUE
        ));
        $this->insert('{{%cat}}', array(
            "id" => "3",
            "description" => "Кошечка ищет себе дом. Возраст 1 месяц. Порода: мейнкун",
            "contact_id" => 3,
            "photo"=> "{5, 6, 7}",
            "status" => TRUE
        ));

    }

    public function down()
    {
        $this->delete(
            '{{%cat}}',"id = '1'"
        );
        $this->delete(
            '{{%cat}}',"id = '2'"
        );
        $this->delete(
            '{{%cat}}',"id = '3'"
        );
    }
}
