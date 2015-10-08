module FileReader where
{-| Elm bindings to HTML5 History API.

# Changing the URL path
@docs setPath, replacePath

# Going back and forth in the browser history
@docs back, forward, go

# URL path as input
@docs path, hash, length

-}

import Signal
import Task exposing (Task)

import Native.FileReader

{-| Sets the path of the url to the given path.
If you are familiar with the HTML5 History API,
`setPath` calls `history.pushState()` which means
that in performing this task, the browser history
moves forward. In other words, pressing the back
button will lead you where you were prior to performing
this task.

    setPath "/blog.html"
-}
getFileContents : String -> Task error String
getFileContents = Native.FileReader.getFileContents
