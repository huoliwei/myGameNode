let fs = require("fs");

function onError(err) {
    console.log("读取目录失败");
    console.log(err);
    return false;
}
function onSuccess(dir) {
    console.log("找到update目录:"+dir);
    return true;
}

function readdirStart(dir) {
    fs.readdir(dir, (err, data) => {
        if (err) {
            onError(err);
        } else {
            if(data.indexOf('upload') !== -1){
                onSuccess(dir+'/upload')
            }
            if(data.length>0){
                data.forEach((item) => {
                    if(dir != './'){
                        var _dir = dir + '/' + item
                    }else{
                        var _dir = item
                    }
                    fs.stat(_dir, (err, data) => {
                        
                        if (err) {
                            onError(err);
                        }else{
                            if(data.isDirectory()){
                                readdirStart(_dir)
                            }
                        }
                    });
                });
            } 
        }
    });
}

readdirStart('./','')