
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Hyperlink Class
A piece of text that references a link.  
```csharp
public class Hyperlink : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.Hyperlink>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Hyperlink](Hyperlink 'Guilded.NET.Base.Chat.Hyperlink')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[Hyperlink](Hyperlink 'Guilded.NET.Base.Chat.Hyperlink')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#129106; Hyperlink  
### Example
```csharp
Hyperlink link = new Hyperlink("https://guilded.gg/", "Guilded's website");  
```
### Remarks
Holds a text and hyperlinks URL in the text.  

| Constructors | |
| :--- | :--- |
| [Hyperlink(string, ChatElement[])](Hyperlink_Hyperlink(string_ChatElement__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, Guilded.NET.Base.Chat.ChatElement[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string, Leaf[])](Hyperlink_Hyperlink(string_Leaf__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, Guilded.NET.Base.Chat.Leaf[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string, object)](Hyperlink_Hyperlink(string_object) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, object)') | A piece of text that references a link.<br/> |
| [Hyperlink(string, string, Mark[])](Hyperlink_Hyperlink(string_string_Mark__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, string, Guilded.NET.Base.Chat.Mark[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string, string, MarkType[])](Hyperlink_Hyperlink(string_string_MarkType__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, string, Guilded.NET.Base.Chat.MarkType[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string, string, object[])](Hyperlink_Hyperlink(string_string_object__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, string, object[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string, string)](Hyperlink_Hyperlink(string_string) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, string)') | A piece of text that references a link.<br/> |
| [Hyperlink(string, IList&lt;ChatElement&gt;)](Hyperlink_Hyperlink(string_IList_ChatElement_) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | A piece of text that references a link.<br/> |
| [Hyperlink(string, IList&lt;Leaf&gt;)](Hyperlink_Hyperlink(string_IList_Leaf_) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Leaf&gt;)') | A piece of text that references a link.<br/> |
| [Hyperlink(string, IFormatProvider, string, object[])](Hyperlink_Hyperlink(string_IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string, System.IFormatProvider, string, object[])') | A piece of text that references a link.<br/> |
| [Hyperlink(string)](Hyperlink_Hyperlink(string) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(string)') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, ChatElement[])](Hyperlink_Hyperlink(Uri_ChatElement__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, Guilded.NET.Base.Chat.ChatElement[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, Leaf[])](Hyperlink_Hyperlink(Uri_Leaf__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, Guilded.NET.Base.Chat.Leaf[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, object)](Hyperlink_Hyperlink(Uri_object) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, object)') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, string, Mark[])](Hyperlink_Hyperlink(Uri_string_Mark__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, string, Guilded.NET.Base.Chat.Mark[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, string, MarkType[])](Hyperlink_Hyperlink(Uri_string_MarkType__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, string, Guilded.NET.Base.Chat.MarkType[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, string, object[])](Hyperlink_Hyperlink(Uri_string_object__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, string, object[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, string)](Hyperlink_Hyperlink(Uri_string) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, string)') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, IList&lt;ChatElement&gt;)](Hyperlink_Hyperlink(Uri_IList_ChatElement_) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;)') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, IList&lt;Leaf&gt;)](Hyperlink_Hyperlink(Uri_IList_Leaf_) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Leaf&gt;)') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri, IFormatProvider, string, object[])](Hyperlink_Hyperlink(Uri_IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri, System.IFormatProvider, string, object[])') | A piece of text that references a link.<br/> |
| [Hyperlink(Uri)](Hyperlink_Hyperlink(Uri) 'Guilded.NET.Base.Chat.Hyperlink.Hyperlink(System.Uri)') | A piece of text that references a link.<br/> |

| Properties | |
| :--- | :--- |
| [Href](Hyperlink_Href 'Guilded.NET.Base.Chat.Hyperlink.Href') | The link that hyperlink references.<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](Hyperlink_ToString() 'Guilded.NET.Base.Chat.Hyperlink.ToString()') | Converts hyperlink to its Markdown equivalent.<br/> |

#### See Also
- [System.Uri](https://docs.microsoft.com/en-us/dotnet/api/System.Uri 'System.Uri')
