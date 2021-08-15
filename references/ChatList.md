#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatList Class
A list with numbers or bullets.  
```csharp
public class ChatList : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.Node, Guilded.NET.Base.Chat.ChatList>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node.md 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Node](Node.md 'Guilded.NET.Base.Chat.Node')[,](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatList](ChatList.md 'Guilded.NET.Base.Chat.ChatList')[&gt;](ContainerNode_T_R_.md 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ChatList  
### Example
List from strings:

```csharp
  
            ChatList list = new ChatList("List item #1", "List item #2", "List item #3");  
            ```


List with other lists and list items:

```csharp
  
            ChatList list = new ChatList  
            (  
                new ChatListItem("List item #1"),  
                new ChatList("Sub-list item #1", "Sub-list item #2"),  
                new ChatListItem("List item #3")  
            );  
            ```


Numerated list:

```csharp
  
            ChatList list = new ChatList(new List<string> { "List item #1", "List item #2" }, true);  
            ```
### Remarks
A node type that contains list items with bullets or numbers at the start.  

| Constructors | |
| :--- | :--- |
| [ChatList(bool)](ChatList_ChatList(bool).md 'Guilded.NET.Base.Chat.ChatList.ChatList(bool)') | A list with numbers or bullets.<br/> |
| [ChatList(Node[])](ChatList_ChatList(Node__).md 'Guilded.NET.Base.Chat.ChatList.ChatList(Guilded.NET.Base.Chat.Node[])') | A list with numbers or bullets.<br/> |
| [ChatList(TextContainer[])](ChatList_ChatList(TextContainer__).md 'Guilded.NET.Base.Chat.ChatList.ChatList(Guilded.NET.Base.Chat.TextContainer[])') | A list with numbers or bullets.<br/> |
| [ChatList(string)](ChatList_ChatList(string).md 'Guilded.NET.Base.Chat.ChatList.ChatList(string)') | A list with numbers or bullets.<br/> |
| [ChatList(string[])](ChatList_ChatList(string__).md 'Guilded.NET.Base.Chat.ChatList.ChatList(string[])') | A list with numbers or bullets.<br/> |
| [ChatList(IEnumerable&lt;TextContainer&gt;, bool)](ChatList_ChatList(IEnumerable_TextContainer__bool).md 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IEnumerable&lt;Guilded.NET.Base.Chat.TextContainer&gt;, bool)') | A list with numbers or bullets.<br/> |
| [ChatList(IEnumerable&lt;string&gt;, bool)](ChatList_ChatList(IEnumerable_string__bool).md 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IEnumerable&lt;string&gt;, bool)') | A list with numbers or bullets.<br/> |
| [ChatList(IList&lt;Node&gt;, bool)](ChatList_ChatList(IList_Node__bool).md 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;, bool)') | A list with numbers or bullets.<br/> |

| Properties | |
| :--- | :--- |
| [IsOrdered](ChatList_IsOrdered.md 'Guilded.NET.Base.Chat.ChatList.IsOrdered') | Whether the list is with numbers or with bullets. <br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ChatList_ToString().md 'Guilded.NET.Base.Chat.ChatList.ToString()') | Converts [ChatList](ChatList.md 'Guilded.NET.Base.Chat.ChatList') to its Markdown equivalent.<br/> |
| [ToString(string)](ChatList_ToString(string).md 'Guilded.NET.Base.Chat.ChatList.ToString(string)') | Converts [ChatList](ChatList.md 'Guilded.NET.Base.Chat.ChatList') to its Markdown equivalent.<br/> |
| [WithItem(ChatElement[])](ChatList_WithItem(ChatElement__).md 'Guilded.NET.Base.Chat.ChatList.WithItem(Guilded.NET.Base.Chat.ChatElement[])') | Adds a list item to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(Leaf[])](ChatList_WithItem(Leaf__).md 'Guilded.NET.Base.Chat.ChatList.WithItem(Guilded.NET.Base.Chat.Leaf[])') | Adds a list item to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string, Mark[])](ChatList_WithItem(string_Mark__).md 'Guilded.NET.Base.Chat.ChatList.WithItem(string, Guilded.NET.Base.Chat.Mark[])') | Adds a list item to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string, MarkType[])](ChatList_WithItem(string_MarkType__).md 'Guilded.NET.Base.Chat.ChatList.WithItem(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a list item to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string)](ChatList_WithItem(string).md 'Guilded.NET.Base.Chat.ChatList.WithItem(string)') | Adds a list item to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithList(Node[])](ChatList_WithList(Node__).md 'Guilded.NET.Base.Chat.ChatList.WithList(Guilded.NET.Base.Chat.Node[])') | Adds a sub-list to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithList(IList&lt;Node&gt;, bool)](ChatList_WithList(IList_Node__bool).md 'Guilded.NET.Base.Chat.ChatList.WithList(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;, bool)') | Adds a sub-list to the [Node](Node.md 'Guilded.NET.Base.Chat.Node') list.<br/> |
#### See Also
- [ChatListItem](ChatListItem.md 'Guilded.NET.Base.Chat.ChatListItem')
