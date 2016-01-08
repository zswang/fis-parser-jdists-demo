/**
 * 全局配置
 */
fis
  .set('project.files', [ // 处理的文件类型
    '**.{css,less,html,php,js,png,jpg,gif,ico,json}'
  ])
  .set('project.ignore', [ // 忽略的文件
    'package.json',
    'node_modules/**',

    'bower.json',
    'bower_components/**',

    '**/_*.*',
    '_output',   //不使用用

    'fis-conf.js',
    'sftp-config.json'
  ])
  .set('project.ext', {
    less: 'css',
    sass: 'css'
  });

/**
 * 测试版
 */
fis.media('qa')
  .match(/\.html$/i, {
    parser: fis.plugin('jdists', {
      trigger: 'debug' // 触发器
    })
  });

/**
 * 正式版
 */
fis.media('pt')
  .match(/\.html$/i, {
    parser: fis.plugin('jdists', {
      trigger: 'release'
    })
  });