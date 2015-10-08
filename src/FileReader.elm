module FileReader where
{-| Elm bindings to HTML5 Reader API.

# Read text (not binary) file as text string
@docs getFileContents

-}

import Signal
import Task exposing (Task)

import Native.FileReader

{-| Takes the id of an `input` of `type="file"`
and attempts to read the file associated with it by the user.

    getFileContents "upload"
-}
getTextFile : String -> Task error String
getTextFile = Native.FileReader.getTextFile
