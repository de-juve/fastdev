<?php
namespace api\modules\v1\controllers;

use yii\filters\auth\QueryParamAuth;
use yii\filters\ContentNegotiator;
use yii\rest\ActiveController;
use yii\web\Response;

class CatController extends ActiveController {
    public $modelClass = 'api\modules\v1\models\Cat';

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

    /*public function actions()
    {
        return array_merge(parent::actions(), [
            'create' => null, // Disable create
            'view' => [
                'class' => 'yii\rest\ViewAction',
                'modelClass' => $this->modelClass,
                'checkAccess' => [$this, 'checkAccess'],
                'findModel' => ['\path\to\your\callback', 'findModelByYourOwnMethod'],
            ],
            'update' => [
                'class' => 'path\to\your\UpdateAction',
                'modelClass' => $this->modelClass,
                'checkAccess' => [$this, 'checkAccess'],
                'scenario' => SCENARIO_UPDATE,
            ],
        ]);
    }*/

    public function actionCreate() {
        return 'test';
    }


}