<?php

use yii\db\Schema;
use yii\db\Migration;

class m150201_130955_insert_contacts_to_contact_table extends Migration
{
    public function up()
    {
        $this->insert('{{%contact}}', array(
            "id" => "1",
            "name" => "Генадий Михалев",
            "phone" => "+7 (922) 22 22 222",
            "email"=> "gm@mail.ru",
        ));
        $this->insert('{{%contact}}', array(
            "id" => "2",
            "name" => "Зинаида Трубач",
            "phone" => "89142112231",
            "email"=> "zn.tryb@ya.ru",
        ));
        $this->insert('{{%contact}}', array(
            "id" => "3",
            "name" => "Наташа",
            "phone" => "3141999",
            "email"=> "12dsf@gmail.com",
        ));
    }

    public function down()
    {
        $this->delete(
            '{{%contact}}',"id = '1'"
        );
        $this->delete(
            '{{%contact}}',"id = '2'"
        );
        $this->delete(
            '{{%contact}}',"id = '3'"
        );
    }
}
