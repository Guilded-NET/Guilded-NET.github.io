
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## MessageDocument Class
The document of the content containing all of the nodes and information.  
```csharp
public class MessageDocument : Guilded.NET.Base.Chat.MessageRoot<Guilded.NET.Base.Chat.MessageDocument>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Guilded.NET.Base.Chat.MessageRoot&lt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;')[MessageDocument](MessageDocument 'Guilded.NET.Base.Chat.MessageDocument')[&gt;](MessageRoot_T_ 'Guilded.NET.Base.Chat.MessageRoot&lt;T&gt;') &#129106; MessageDocument  

| Constructors | |
| :--- | :--- |
| [MessageDocument(ElementData, Leaf[])](MessageDocument_MessageDocument(ElementData_Leaf__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.Leaf[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, Node[])](MessageDocument_MessageDocument(ElementData_Node__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.Node[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, TextContainer)](MessageDocument_MessageDocument(ElementData_TextContainer) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Chat.TextContainer)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, Embed[])](MessageDocument_MessageDocument(ElementData_Embed__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, Guilded.NET.Base.Embeds.Embed[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, object)](MessageDocument_MessageDocument(ElementData_object) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, object)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, string, object[])](MessageDocument_MessageDocument(ElementData_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, string)](MessageDocument_MessageDocument(ElementData_string) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, string)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, IList&lt;Node&gt;)](MessageDocument_MessageDocument(ElementData_IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(ElementData, IFormatProvider, string, object[])](MessageDocument_MessageDocument(ElementData_IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.ElementData, System.IFormatProvider, string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Leaf[])](MessageDocument_MessageDocument(Leaf__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.Leaf[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Node[])](MessageDocument_MessageDocument(Node__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.Node[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(TextContainer)](MessageDocument_MessageDocument(TextContainer) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Chat.TextContainer)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(Embed[])](MessageDocument_MessageDocument(Embed__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(Guilded.NET.Base.Embeds.Embed[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(object)](MessageDocument_MessageDocument(object) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(object)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(string, object[])](MessageDocument_MessageDocument(string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(string, object[])') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(string)](MessageDocument_MessageDocument(string) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(string)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(IList&lt;Node&gt;)](MessageDocument_MessageDocument(IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | The document of the content containing all of the nodes and information.<br/> |
| [MessageDocument(IFormatProvider, string, object[])](MessageDocument_MessageDocument(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.MessageDocument.MessageDocument(System.IFormatProvider, string, object[])') | The document of the content containing all of the nodes and information.<br/> |

| Properties | |
| :--- | :--- |
| [Data](MessageDocument_Data 'Guilded.NET.Base.Chat.MessageDocument.Data') | Data of this message document.<br/> |
| [Nodes](MessageDocument_Nodes 'Guilded.NET.Base.Chat.MessageDocument.Nodes') | The list of nodes in the message.<br/> |

| Methods | |
| :--- | :--- |
| [Share(string)](MessageDocument_Share(string) 'Guilded.NET.Base.Chat.MessageDocument.Share(string)') | Adds an URL in the message share list.<br/> |
| [Share(IList&lt;Uri&gt;)](MessageDocument_Share(IList_Uri_) 'Guilded.NET.Base.Chat.MessageDocument.Share(System.Collections.Generic.IList&lt;System.Uri&gt;)') | Adds the list of URLs in the message share list.<br/> |
| [Share(Uri)](MessageDocument_Share(Uri) 'Guilded.NET.Base.Chat.MessageDocument.Share(System.Uri)') | Adds an URL in the message share list.<br/> |
| [ToString()](MessageDocument_ToString() 'Guilded.NET.Base.Chat.MessageDocument.ToString()') | Converts all nodes to string and joins them together.<br/> |
| [With(Node)](MessageDocument_With(Node) 'Guilded.NET.Base.Chat.MessageDocument.With(Guilded.NET.Base.Chat.Node)') | Adds a node to the message document.<br/> |
| [With(IList&lt;Node&gt;)](MessageDocument_With(IList_Node_) 'Guilded.NET.Base.Chat.MessageDocument.With(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Node&gt;)') | Adds a list of nodes to the message document.<br/> |

#### See Also
- [BlockQuote](BlockQuote 'Guilded.NET.Base.Chat.BlockQuote')
- [Paragraph](Paragraph 'Guilded.NET.Base.Chat.Paragraph')
- [MarkdownText](MarkdownText 'Guilded.NET.Base.Chat.MarkdownText')
- [MessageContent](MessageContent 'Guilded.NET.Base.Chat.MessageContent')
- [Node](Node 'Guilded.NET.Base.Chat.Node')
- [ContainerNode&lt;T&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')
