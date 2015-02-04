<?php

use yii\db\Schema;
use yii\db\Migration;

class m150201_123756_create_cat_table extends Migration
{
    public function up()
    {
        $this->createTable('{{%cat}}', [
            'id' => Schema::TYPE_PK,
            'description' => 'varchar(256)',
            'contact_id' => Schema::TYPE_SMALLINT . ' NOT NULL',
            'photo' => 'int[] DEFAULT NULL',
        ]);
    }

    public function down()
    {
        $this->dropTable('{{%cat}}');
    }
}
