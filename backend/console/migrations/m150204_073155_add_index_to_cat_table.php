<?php

use yii\db\Schema;
use yii\db\Migration;

class m150204_073155_add_index_to_cat_table extends Migration
{
    public function up()
    {
        $this->createIndex('id', '{{%cat}}', 'id', true);
    }

    public function down()
    {
        $this->dropIndex('id', '{{%cat}}');
    }
}
