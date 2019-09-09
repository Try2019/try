var path=require('path');
//由于webpack依赖于node.js进行构建，所以在webpack的配置文件中，所有合法的node代码都是支持的

var htmlWebpackPlugin=require('html-webpack-plugin');
//在内存中根据指定的模板生成一份内存中的首页同时将打包好的bundle.js注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个plugin结点
var VueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
  entry:path.join(__dirname,'./src/main.js'),         //入口文件
  output:{          //指定输出选项
    path:path.join(__dirname,'./dist'),      //输出路径
    filename:'bundle.js'                  //指定输出文件的名称
  },
  mode:'development',
  devServer:{      //这是配置dev-server的第二种方式，
    //--open --port 3000 --contentBase src --hot
    open:true,
    port:3000,
    /*contentBase:'src',*/
    hot:true
  },
  plugins:[             //所有webpack插件配置结点
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),   //指定模板文件路径
      filename:'index.html'          //内存页面名称
    }),
    new VueLoaderPlugin()
  ],
  module:{
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']},
      //{test:/\.scss$/,use:['style-loader','css-loader','scss-loader']},
      {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=273486&name=[hash:8]-[name].[ext]'},
      //处理图片的loader，后面的limit参数表示图片大小，单位为字节，若这个数字小于等于真实大小则图片使用哈希值命名，
      //若大于真实大小或不设置使用base64进行命名，这里的limit值取较小图片的字节数
      //进行哈希值命名是由于可能有两个文件夹img1和img2，它们都有名称为p2，则有可能显示同一张图片，使用哈希值避免显示同一张图片
      //可以使用name参数进行重命名，其中[name]为原来的图片名，[ext]为扩展名
      //前面再加hash:8表示加上8位哈希值进行命名，避免显示同一张图片，哈希最长为32位
      
      {test:/.(ttf|woff2|woff|eot|svg)$/,use:'url-loader'},        //处理字体文件的loader
      {test:/\.js$/, use:'babel-loader', exclude:/node_modules/},  //配置babel转换高级es6语法
      {test:/\.vue$/,use:'vue-loader'}      //处理.vue文件的loader
    ]
  },
  resolve:{
    alias:{        //设置Vue被导入时候的包的路径
      //"vue$":"vue/dist/vue.js"
    }
  }
}
