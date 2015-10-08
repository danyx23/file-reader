Elm.Native = Elm.Native || {};
Elm.Native.FileReader = {};

Elm.Native.FileReader.make = function(localRuntime){

    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.FileReader = localRuntime.Native.FileReader || {};

    if (localRuntime.Native.FileReader.values){
        return localRuntime.Native.FileReader.values;
    }

    var Task = Elm.Native.Task.make(localRuntime);

    // getFileContents : String -> Task error String
    var getTextFile = function(id){
        return Task.asyncFunction(function(callback){
            var reader = new FileReader();

            reader.onload = function(evt) {
                return callback(Task.succeed(evt.target.result))
            };

            reader.onerror = function() {
                return callback(Task.fail({ctor : 'read_fail'}));
            };

            var fileUpload = document.getElementById(id).files[0];
            if (fileUpload)
                reader.readAsText(fileUpload);
            else callback(Task.fail({ctor : 'no_file_specified'}));
        });
    };

    return {
        getTextFile : getTextFile
    };
};
