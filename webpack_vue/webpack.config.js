var path=require("path")
var htmlWebpackPlugin=require("html-webpack-plugin")
var vueLoaderPlugin=require("vue-loader/lib/plugin")
//var extractTextWebpackPlugin=require("extract-text-webpack-plugin")
module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        //生成一个虚拟的index.html文件放在根目录下，bundle.js会自动注入到内存中，被html界面引入
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:"index.html"
        }),
        //为了打包.vue文件
        new vueLoaderPlugin(),
        //new extractTextWebpackPlugin('style.css')
    ],
    module:{
        rules:[
            //处理css文件
            {test:/\.css$/,use:["style-loader","css-loader"]},
            //处理scss文件
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            //处理图片路径
            {
                test:/\.(jpg|jpeg|png|gif|bmp)$/,
                use:[
                    {
                        loader:'url-loader',
                        /*
                        options:{
                            limit:33725,
                            // outputPath:path.join(__dirname,'./src/images/'),
                            // name:'[name].[ext]'
                        }
                        */
                    }
                ]
            },
            //处理字体文件，内部依赖 file-loader
            {test:/\.(ttf|svg|eot|woff|woff2)$/,use:'url-loader'},
            //处理js高级语法，不处理node_modules文件中引入的js文件
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            //处理.vue文件
            {test:/\.vue$/,use:"vue-loader",exclude:/node_modules/}
        ]
    },
    resolve:{
        alias:{     //修改vue被导入时包的路径，默认导入vue.runtime.common.js
           // 'vue$':'vue/dist/vue.esm.js'
        }
    }
}