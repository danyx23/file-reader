Elm.Native = Elm.Native || {};
Elm.Native.FileReader = {};

Elm.Native.FileReader.make = function(localRuntime){

    localRuntime.Native = localRuntime.Native || {};
    localRuntime.Native.FileReader = localRuntime.Native.FileReader || {};

    if (localRuntime.Native.FileReader.values){
        return localRuntime.Native.FileReader.values;
    }

    var NS = Elm.Native.Signal.make(localRuntime);
    var Task = Elm.Native.Task.make(localRuntime);
    var Utils = Elm.Native.Utils.make(localRuntime);
    var node = window;

    // path : Signal String
    var content = NS.input('FileReader.content', "");

    // setPath : String -> Task error ()
    var getFileContents = function(id){
        return Task.asyncFunction(function(callback){
            var reader = new FileReader();

            reader.onload = function(evt) {
                console.log(evt.target.result);
                localRuntime.notify(content.id, evt.target.result);
            };

            var fileUpload = document.getElementById(id).files[0];
            reader.readAsText(fileUpload);

            return callback(Task.succeed(Utils.Tuple0));
        });
    };

    return {
        getFileContents : getFileContents
    };

};
