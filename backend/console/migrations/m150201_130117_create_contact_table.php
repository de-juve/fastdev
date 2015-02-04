<?php

use yii\db\Schema;
use yii\db\Migration;

class m150201_130117_create_contact_table extends Migration
{
    public function up()
    {
        $this->createTable('{{%contact}}', [
            'id' => Schema::TYPE_PK,
            'name' => 'varchar(32) NOT NULL',
            'phone' => Schema::TYPE_STRING . ' NOT NULL',
            'email' => Schema::TYPE_STRING . ' NOT NULL',
        ]);

        $this->addForeignKey("contact_fk", "{{%cat}}", "contact_id", "{{%contact}}", "id", 'RESTRICT');
    }

    public function down()
    {
        $this->dropTable('{{%contact}}');
    }
}
