
**history 对象：**
- `go`: 一个函数，用于导航到历史记录中的某个位置，参数为 `n`（可以是正数或负数，表示前进或后退的步数）。
- `goBack`: 一个函数，用于导航到历史记录中的上一个位置。
- `goForward`: 一个函数，用于导航到历史记录中的下一个位置。
- `push`: 一个函数，用于向历史记录中添加一个新的条目，参数为 `path` 和 `state`。
- `replace`: 一个函数，用于替换历史记录中的当前条目，参数为 `path` 和 `state`。

**location 对象：**
- `pathname`: 当前 URL 的路径部分，值为 `"/about"`。
- `search`: 当前 URL 的查询字符串部分，当前为空。
- `state`: 与当前位置关联的状态，当前为 `undefined`。

**match 对象：**
- `params`: 一个对象，包含路由参数，当前为空对象 `{}`。
- `path`: 匹配的路由路径，值为 `"/about"`。
- `url`: 匹配的路由 URL，值为 `"/about"`。
