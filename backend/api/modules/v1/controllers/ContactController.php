<?php
namespace api\modules\v1\controllers;

use yii\filters\auth\QueryParamAuth;
use yii\filters\ContentNegotiator;
use yii\rest\ActiveController;
use yii\web\Response;

class ContactController extends ActiveController {
    public $modelClass = 'api\modules\v1\models\Contact';

    public function behaviors()
    {
        $behaviors = parent::behaviors();
        /*$behaviors['authenticator'] = [
            'class' => QueryParamAuth::className(),
        ];
        $behaviors['bootstrap'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];*/
        return $behaviors;
    }

}