
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## ChatList Class
A list with numbers or bullets.  
```csharp
public class ChatList : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.Node, Guilded.NET.Base.Chat.ChatList>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Node](Node 'Guilded.NET.Base.Chat.Node')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatList](ChatList 'Guilded.NET.Base.Chat.ChatList')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; ChatList  
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
| [ChatList(bool)](ChatList_ChatList(bool) 'Guilded.NET.Base.Chat.ChatList.ChatList(bool)') | A list with numbers or bullets.<br/> |
| [ChatList(Node[])](ChatList_ChatList(Node__) 'Guilded.NET.Base.Chat.ChatList.ChatList(Guilded.NET.Base.Chat.Node[])') | A list with numbers or bullets.<br/> |
| [ChatList(TextContainer[])](ChatList_ChatList(TextContainer__) 'Guilded.NET.Base.Chat.ChatList.ChatList(Guilded.NET.Base.Chat.TextContainer[])') | A list with numbers or bullets.<br/> |
| [ChatList(string)](ChatList_ChatList(string) 'Guilded.NET.Base.Chat.ChatList.ChatList(string)') | A list with numbers or bullets.<br/> |
| [ChatList(string[])](ChatList_ChatList(string__) 'Guilded.NET.Base.Chat.ChatList.ChatList(string[])') | A list with numbers or bullets.<br/> |
| [ChatList(IEnumerable&lt;TextContainer&gt;, bool)](ChatList_ChatList(IEnumerable_TextContainer__bool) 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IEnumerable&lt;Guilded.NET.Base.Chat.TextContainer&gt;, bool)') | A list with numbers or bullets.<br/> |
| [ChatList(IEnumerable&lt;string&gt;, bool)](ChatList_ChatList(IEnumerable_string__bool) 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IEnumerable&lt;string&gt;, bool)') | A list with numbers or bullets.<br/> |
| [ChatList(IList&lt;Node&gt;, bool)](ChatList_ChatList(IList_Node__bool) 'Guilded.NET.Base.Chat.ChatList.ChatList(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;, bool)') | A list with numbers or bullets.<br/> |

| Properties | |
| :--- | :--- |
| [IsOrdered](ChatList_IsOrdered 'Guilded.NET.Base.Chat.ChatList.IsOrdered') | Whether the list is with numbers or with bullets. <br/> |

| Methods | |
| :--- | :--- |
| [ToString()](ChatList_ToString() 'Guilded.NET.Base.Chat.ChatList.ToString()') | Converts [ChatList](ChatList 'Guilded.NET.Base.Chat.ChatList') to its Markdown equivalent.<br/> |
| [ToString(string)](ChatList_ToString(string) 'Guilded.NET.Base.Chat.ChatList.ToString(string)') | Converts [ChatList](ChatList 'Guilded.NET.Base.Chat.ChatList') to its Markdown equivalent.<br/> |
| [WithItem(ChatElement[])](ChatList_WithItem(ChatElement__) 'Guilded.NET.Base.Chat.ChatList.WithItem(Guilded.NET.Base.Chat.ChatElement[])') | Adds a list item to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(Leaf[])](ChatList_WithItem(Leaf__) 'Guilded.NET.Base.Chat.ChatList.WithItem(Guilded.NET.Base.Chat.Leaf[])') | Adds a list item to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string, Mark[])](ChatList_WithItem(string_Mark__) 'Guilded.NET.Base.Chat.ChatList.WithItem(string, Guilded.NET.Base.Chat.Mark[])') | Adds a list item to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string, MarkType[])](ChatList_WithItem(string_MarkType__) 'Guilded.NET.Base.Chat.ChatList.WithItem(string, Guilded.NET.Base.Chat.MarkType[])') | Adds a list item to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithItem(string)](ChatList_WithItem(string) 'Guilded.NET.Base.Chat.ChatList.WithItem(string)') | Adds a list item to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithList(Node[])](ChatList_WithList(Node__) 'Guilded.NET.Base.Chat.ChatList.WithList(Guilded.NET.Base.Chat.Node[])') | Adds a sub-list to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |
| [WithList(IList&lt;Node&gt;, bool)](ChatList_WithList(IList_Node__bool) 'Guilded.NET.Base.Chat.ChatList.WithList(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;, bool)') | Adds a sub-list to the [Node](Node 'Guilded.NET.Base.Chat.Node') list.<br/> |

#### See Also
- [ChatListItem](ChatListItem 'Guilded.NET.Base.Chat.ChatListItem')
