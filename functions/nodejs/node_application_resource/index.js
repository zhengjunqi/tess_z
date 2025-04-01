// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");
const fs = require('fs')

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
module.exports = async function (params, context, logger) {
  // 日志功能
  // logger.info(`${new Date()} 函数开始执行`);

  // 本地创建文件
  const content = 'Hello World';
  // 文件创建在左侧函数目录下，且不能再嵌套目录，只能是一个裸的文件名
  // 🌟手动创建也行。。。
  const filePath = 'test.txt'
  // const filePath = path.join('test_files', 'test.txt');
  fs.writeFile(filePath, content, (err) => {
      if (err) {
          console.error('写入文件出错:', err);
      } else {
          console.log('文件已成功写入。');
      }
  });

  // 上传本地文件
  const file_info = await application.resources.file.upload(filePath);
  logger.info(file_info)

  // 下载文件
  const download_content = await application.resources.file.download({id: file_info.id});
  logger.info(download_content.toString());


  // 在这里补充业务代码
}