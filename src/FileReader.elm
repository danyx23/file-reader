module FileReader (getTextFile) where
{-| Elm bindings to HTML5 Reader API.

# Read file as text string
@docs getTextFile

-}

import Signal
import Task exposing (Task)

import Native.FileReader

{-| Takes the id of an `input` of `type="file"` and attempts
to read the text file associated with it by the user.

    getTextFile "upload"
-}
getTextFile : String -> Task error String
getTextFile = Native.FileReader.getTextFile
