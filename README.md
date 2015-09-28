# User dependig page-filter settings

This module saves user dependig filter phrases into localstorage.

##### Installation

        npm install pagefiltersettings

##### Variables

Follow variables are required:

* logged in User(name)
* page to apply to (URI)
* filter phrase

##### Commands

The following commands are present:

```javascript
// Get the Searchword from a URL
pagefiltersettings.getItem('username', 'URL');
// Set a Searchword to a URL
pagefiltersettings.setItem('username', 'URL', 'Word');
// Get complete
pagefiltersettings.getAllItems();
// Delete complete
siteFiltersaver.removeAllItems();
// Delete to a URL and User
pagefiltersettings.removeItems('username', 'URL');
```

## License

The MIT License (MIT)
Copyright (c) 2014-2015 Werbasinnotec.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
