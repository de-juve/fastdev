<?php
$params = array_merge(
    require(__DIR__ . '/../../common/config/params.php'),
    require(__DIR__ . '/../../common/config/params-local.php'),
    require(__DIR__ . '/params.php'),
    require(__DIR__ . '/params-local.php')
);

return [
    'id' => 'app-api',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'modules' => [
        'v1' => [
            'basePath' => '@app/modules/v1',
            'class' => 'api\modules\v1\Module'   // here is our v1 modules
        ]
    ],
    'components' => [
        'user' => [
            'identityClass' => 'common\models\User',
            'enableAutoLogin' => false,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'request' => [
            'class' => '\yii\web\Request',
            'enableCookieValidation' => false,
            'parsers' => [
                'application/json' => 'yii\web\JsonParser',
            ],
        ],
        'urlManager' => [
            'enablePrettyUrl' => true,
            'enableStrictParsing' => true,
            'showScriptName' => false,
            'rules' => [
                /*['class' => 'yii\rest\UrlRule','controller' => 'v1/cat',   // our country api rule,
                    'tokens' => [
                        '{id}' => '<id:\\w+>'
                    ]
                ]*/
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/cat'
                ],
                [
                    'class' => 'yii\rest\UrlRule',
                    'controller' => 'v1/contact'
                ],
                'OPTIONS v1/user/login' => 'v1/user/login',
                'POST v1/user/login' => 'v1/user/login',
            ],
        ]
    ],
    'params' => $params,
];