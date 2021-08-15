
#### [Guilded.NET.Base](index 'index')
### [Guilded.NET.Base.Chat](index#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Heading Class
A large or a small title.  
```csharp
public class Heading : Guilded.NET.Base.Chat.ContainerNode<Guilded.NET.Base.Chat.Heading>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement') &#129106; [Node](Node 'Guilded.NET.Base.Chat.Node') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[ChatElement](ChatElement 'Guilded.NET.Base.Chat.ChatElement')[,](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;')[Heading](Heading 'Guilded.NET.Base.Chat.Heading')[&gt;](ContainerNode_T_R_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T,R&gt;') &#129106; [Guilded.NET.Base.Chat.ContainerNode&lt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;')[Heading](Heading 'Guilded.NET.Base.Chat.Heading')[&gt;](ContainerNode_T_ 'Guilded.NET.Base.Chat.ContainerNode&lt;T&gt;') &#129106; Heading  
### Example
Big heading

```csharp
  
            Heading heading = new Heading("Title here");  
            ```


Small heading

```csharp
  
            Heading heading = new Heading("Sub-title here", false);  
            ```
### Remarks
A title that is either small or big.  

| Constructors | |
| :--- | :--- |
| [Heading(bool)](Heading_Heading(bool) 'Guilded.NET.Base.Chat.Heading.Heading(bool)') | A large or a small title.<br/> |
| [Heading(ChatElement, bool)](Heading_Heading(ChatElement_bool) 'Guilded.NET.Base.Chat.Heading.Heading(Guilded.NET.Base.Chat.ChatElement, bool)') | A large or a small title.<br/> |
| [Heading(ChatElement[])](Heading_Heading(ChatElement__) 'Guilded.NET.Base.Chat.Heading.Heading(Guilded.NET.Base.Chat.ChatElement[])') | A large or a small title.<br/> |
| [Heading(Leaf[])](Heading_Heading(Leaf__) 'Guilded.NET.Base.Chat.Heading.Heading(Guilded.NET.Base.Chat.Leaf[])') | A large or a small title.<br/> |
| [Heading(object, bool)](Heading_Heading(object_bool) 'Guilded.NET.Base.Chat.Heading.Heading(object, bool)') | A large or a small title.<br/> |
| [Heading(string, bool)](Heading_Heading(string_bool) 'Guilded.NET.Base.Chat.Heading.Heading(string, bool)') | A large or a small title.<br/> |
| [Heading(string, object[], bool)](Heading_Heading(string_object___bool) 'Guilded.NET.Base.Chat.Heading.Heading(string, object[], bool)') | A large or a small title.<br/> |
| [Heading(string, object[])](Heading_Heading(string_object__) 'Guilded.NET.Base.Chat.Heading.Heading(string, object[])') | A large or a small title.<br/> |
| [Heading(string)](Heading_Heading(string) 'Guilded.NET.Base.Chat.Heading.Heading(string)') | A large or a small title.<br/> |
| [Heading(IList&lt;ChatElement&gt;, bool)](Heading_Heading(IList_ChatElement__bool) 'Guilded.NET.Base.Chat.Heading.Heading(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.ChatElement&gt;, bool)') | A large or a small title.<br/> |
| [Heading(IList&lt;Leaf&gt;, bool)](Heading_Heading(IList_Leaf__bool) 'Guilded.NET.Base.Chat.Heading.Heading(System.Collections.Generic.IList&lt;Guilded.NET.Base.Chat.Leaf&gt;, bool)') | A large or a small title.<br/> |
| [Heading(IFormatProvider, string, object[], bool)](Heading_Heading(IFormatProvider_string_object___bool) 'Guilded.NET.Base.Chat.Heading.Heading(System.IFormatProvider, string, object[], bool)') | A large or a small title.<br/> |
| [Heading(IFormatProvider, string, object[])](Heading_Heading(IFormatProvider_string_object__) 'Guilded.NET.Base.Chat.Heading.Heading(System.IFormatProvider, string, object[])') | A large or a small title.<br/> |

| Properties | |
| :--- | :--- |
| [IsLarge](Heading_IsLarge 'Guilded.NET.Base.Chat.Heading.IsLarge') | Gets whether the header is large and not small<br/> |

| Methods | |
| :--- | :--- |
| [ToString()](Heading_ToString() 'Guilded.NET.Base.Chat.Heading.ToString()') | Converts header/title to its Markdown equivalent.<br/> |
