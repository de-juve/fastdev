<?php

use yii\db\Schema;
use yii\db\Migration;

class m150201_131556_add_status_column_to_cat_table extends Migration
{
    public function up()
    {
        $this->addColumn("{{%cat}}", 'status', Schema::TYPE_BOOLEAN);
    }

    public function down()
    {
        $this->dropColumn("{{%cat}}", 'status');
    }
}
