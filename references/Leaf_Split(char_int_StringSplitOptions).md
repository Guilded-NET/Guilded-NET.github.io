#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Chat](Guilded_NET_Base.md#Guilded_NET_Base_Chat 'Guilded.NET.Base.Chat').[Leaf](Leaf.md 'Guilded.NET.Base.Chat.Leaf')
## Leaf.Split(char, int, StringSplitOptions) Method
Splits a leaf by separator and creates clone sub-leaves.  
```csharp
public Guilded.NET.Base.Chat.Leaf[] Split(char separator, int count, System.StringSplitOptions options=System.StringSplitOptions.None);
```
#### Parameters
<a name='Guilded_NET_Base_Chat_Leaf_Split(char_int_System_StringSplitOptions)_separator'></a>
`separator` [System.Char](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char')  
The separator where the split will happen
  
<a name='Guilded_NET_Base_Chat_Leaf_Split(char_int_System_StringSplitOptions)_count'></a>
`count` [System.Int32](https://docs.microsoft.com/en-us/dotnet/api/System.Int32 'System.Int32')  
How many splits to do
  
<a name='Guilded_NET_Base_Chat_Leaf_Split(char_int_System_StringSplitOptions)_options'></a>
`options` [System.StringSplitOptions](https://docs.microsoft.com/en-us/dotnet/api/System.StringSplitOptions 'System.StringSplitOptions')  
Splitting options
  
#### Returns
[Leaf](Leaf.md 'Guilded.NET.Base.Chat.Leaf')[[]](https://docs.microsoft.com/en-us/dotnet/api/System.Array 'System.Array')  
Array of leaves
