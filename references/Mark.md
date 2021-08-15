#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat')
## Mark Class
A formatting of a leaf.  
```csharp
public class Mark : Guilded.NET.Base.Chat.ChatElement,
System.ICloneable
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.NET.Base.BaseObject') &#129106; [ChatElement](ChatElement.md 'Guilded.NET.Base.Chat.ChatElement') &#129106; Mark  

Implements [System.ICloneable](https://docs.microsoft.com/en-us/dotnet/api/System.ICloneable 'System.ICloneable')  

| Constructors | |
| :--- | :--- |
| [Mark(MarkType, Dictionary&lt;string,object&gt;)](Mark_Mark(MarkType_Dictionary_string_object_).md 'Guilded.NET.Base.Chat.Mark.Mark(Guilded.NET.Base.Chat.MarkType, System.Collections.Generic.Dictionary&lt;string,object&gt;)') | Creates a new formatting [Mark](Mark.md 'Guilded.NET.Base.Chat.Mark') based on given [MarkType](MarkType.md 'Guilded.NET.Base.Chat.MarkType').<br/> |
| [Mark(MarkType)](Mark_Mark(MarkType).md 'Guilded.NET.Base.Chat.Mark.Mark(Guilded.NET.Base.Chat.MarkType)') | Creates a new formatting [Mark](Mark.md 'Guilded.NET.Base.Chat.Mark') based on given [MarkType](MarkType.md 'Guilded.NET.Base.Chat.MarkType').<br/> |

| Properties | |
| :--- | :--- |
| [Data](Mark_Data.md 'Guilded.NET.Base.Chat.Mark.Data') | The data of the formatting.<br/> |
| [Type](Mark_Type.md 'Guilded.NET.Base.Chat.Mark.Type') | The type of the formatting.<br/> |

| Methods | |
| :--- | :--- |
| [Clone()](Mark_Clone().md 'Guilded.NET.Base.Chat.Mark.Clone()') | Creates a new mark with similar properties.<br/> |
| [ToString()](Mark_ToString().md 'Guilded.NET.Base.Chat.Mark.ToString()') | Returns this mark's formatting prefix/postfix.<br/> |
#### See Also
- [TextContainer](TextContainer.md 'Guilded.NET.Base.Chat.TextContainer')
- [Leaf](Leaf.md 'Guilded.NET.Base.Chat.Leaf')
- [MarkType](MarkType.md 'Guilded.NET.Base.Chat.MarkType')
