---
title: Guilded.Commands
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Commands Namespace
- **[AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument')** `Class`
  Represents the information about any command argument in .
  - **[AbstractCommandArgument(ParameterInfo)](AbstractCommandArgument.AbstractCommandArgument(ParameterInfo) 'Guilded.Commands.AbstractCommandArgument.AbstractCommandArgument(ParameterInfo)')** `Constructor`
    Initializes a new instance of [AbstractCommandArgument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') from a parameter.
  - **[ArgumentType](AbstractCommandArgument.ArgumentType 'Guilded.Commands.AbstractCommandArgument.ArgumentType')** `Property`
    Gets the type of [the parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter').
  - **[Attribute](AbstractCommandArgument.Attribute 'Guilded.Commands.AbstractCommandArgument.Attribute')** `Property`
    Gets [the attribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute') that was used to declare [the command parameter](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[Name](AbstractCommandArgument.Name 'Guilded.Commands.AbstractCommandArgument.Name')** `Property`
    Gets the displayed name of [the command argument](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name').
  - **[Parameter](AbstractCommandArgument.Parameter 'Guilded.Commands.AbstractCommandArgument.Parameter')** `Property`
    Gets the parameter that was declared in the method.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](AbstractCommandArgument.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.AbstractCommandArgument.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>')** `Class`
  Represents the base for information about any type of Guilded.NET command.
  - **[AbstractCommandInfo(CommandAttribute, TMember)](AbstractCommandInfo_TMember_.AbstractCommandInfo(CommandAttribute,TMember) 'Guilded.Commands.AbstractCommandInfo<TMember>.AbstractCommandInfo(Guilded.Commands.CommandAttribute, TMember)')** `Constructor`
    Initializes a new instance of [AbstractCommandInfo&lt;TMember&gt;](AbstractCommandInfo_TMember_ 'Guilded.Commands.AbstractCommandInfo<TMember>').
  - **[Aliases](AbstractCommandInfo_TMember_.Aliases 'Guilded.Commands.AbstractCommandInfo<TMember>.Aliases')** `Property`
    Gets the alternative names of the command.
  - **[Attribute](AbstractCommandInfo_TMember_.Attribute 'Guilded.Commands.AbstractCommandInfo<TMember>.Attribute')** `Property`
    Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member').
  - **[Description](AbstractCommandInfo_TMember_.Description 'Guilded.Commands.AbstractCommandInfo<TMember>.Description')** `Property`
    Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description.
  - **[Examples](AbstractCommandInfo_TMember_.Examples 'Guilded.Commands.AbstractCommandInfo<TMember>.Examples')** `Property`
    Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage.
  - **[Member](AbstractCommandInfo_TMember_.Member 'Guilded.Commands.AbstractCommandInfo<TMember>.Member')** `Property`
    Gets the member who was declared as a command.
  - **[Name](AbstractCommandInfo_TMember_.Name 'Guilded.Commands.AbstractCommandInfo<TMember>.Name')** `Property`
    Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command.
- **[ClientCommandExtensions](ClientCommandExtensions 'Guilded.Commands.ClientCommandExtensions')** `Class`
  Extensions for Guilded clients related to commands.
  - **[AddCommands(this AbstractGuildedClient, CommandModule, CommandConfiguration)](ClientCommandExtensions.AddCommands(thisAbstractGuildedClient,CommandModule,CommandConfiguration) 'Guilded.Commands.ClientCommandExtensions.AddCommands(this Guilded.AbstractGuildedClient, Guilded.Commands.CommandModule, Guilded.Commands.CommandConfiguration)')** `Method`
    Adds a command module to the client.
  - **[AddCommands(this AbstractGuildedClient, CommandModule, string, char[], StringSplitOptions)](ClientCommandExtensions.AddCommands(thisAbstractGuildedClient,CommandModule,string,char[],StringSplitOptions) 'Guilded.Commands.ClientCommandExtensions.AddCommands(this Guilded.AbstractGuildedClient, Guilded.Commands.CommandModule, string, char[], StringSplitOptions)')** `Method`
    Adds a command module to the client.
  - **[AddCommands(this AbstractGuildedClient, CommandModule, string, StringSplitOptions)](ClientCommandExtensions.AddCommands(thisAbstractGuildedClient,CommandModule,string,StringSplitOptions) 'Guilded.Commands.ClientCommandExtensions.AddCommands(this Guilded.AbstractGuildedClient, Guilded.Commands.CommandModule, string, StringSplitOptions)')** `Method`
    Adds a command module to the client.
  - **[AddCommands(this AbstractGuildedClient, CommandModule, StringSplitOptions)](ClientCommandExtensions.AddCommands(thisAbstractGuildedClient,CommandModule,StringSplitOptions) 'Guilded.Commands.ClientCommandExtensions.AddCommands(this Guilded.AbstractGuildedClient, Guilded.Commands.CommandModule, StringSplitOptions)')** `Method`
    Adds a command module to the client.
- **[CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo')** `Class`
  Represents the information about one-value command argument in .
  - **[CommandArgumentInfo(ParameterInfo)](CommandArgumentInfo.CommandArgumentInfo(ParameterInfo) 'Guilded.Commands.CommandArgumentInfo.CommandArgumentInfo(ParameterInfo)')** `Constructor`
    Initializes a new instance of [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo') from a parameter.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandArgumentInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[CommandAttribute](CommandAttribute 'Guilded.Commands.CommandAttribute')** `Class`
  Declares a method or a type as a command.
  - **[CommandAttribute()](CommandAttribute.CommandAttribute() 'Guilded.Commands.CommandAttribute.CommandAttribute()')** `Constructor`
    Declares a method as a command with no aliases.
  - **[CommandAttribute(string)](CommandAttribute.CommandAttribute(string) 'Guilded.Commands.CommandAttribute.CommandAttribute(string)')** `Constructor`
    Declares a method as a command with given name
  - **[Aliases](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases')** `Property`
    Gets the alternative names of the command.
  - **[Name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name')** `Property`
    Gets the overriden name of the command.
- **[CommandBase](CommandBase 'Guilded.Commands.CommandBase')** `Class`
  Represents the base for all [command types](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandBase()](CommandBase.CommandBase() 'Guilded.Commands.CommandBase.CommandBase()')** `Constructor`
    Initializes a new instance of [CommandBase](CommandBase 'Guilded.Commands.CommandBase').
  - **[CommandLookup](CommandBase.CommandLookup 'Guilded.Commands.CommandBase.CommandLookup')** `Property`
    Gets the lookup of [commands or sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') based on their [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name').
  - **[Commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands')** `Property`
    Gets the list of commands or sub-commands of this command.
  - **[FailedCommand](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand')** `Property`
    Gets the event for failed command invokation.
  - **[FilterCommandsByName(string)](CommandBase.FilterCommandsByName(string) 'Guilded.Commands.CommandBase.FilterCommandsByName(string)')** `Method`
    Filters out [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') that do not have name.
  - **[InvokeAsync(string, RootCommandEvent, IEnumerable&lt;string&gt;)](CommandBase.InvokeAsync(string,RootCommandEvent,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeAsync(string, Guilded.Commands.RootCommandEvent, System.Collections.Generic.IEnumerable<string>)')** `Method`
    Invokes any of the command's [sub-commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands').
  - **[InvokeCommandAsync(CommandContainerInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeCommandAsync(CommandContainerInfo,RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandContainerInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)')** `Method`
    Invokes command as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase').
  - **[InvokeCommandAsync(CommandInfo, RootCommandEvent, string, IEnumerable&lt;string&gt;, IEnumerable&lt;object&gt;)](CommandBase.InvokeCommandAsync(CommandInfo,RootCommandEvent,string,IEnumerable_string_,IEnumerable_object_) 'Guilded.Commands.CommandBase.InvokeCommandAsync(Guilded.Commands.CommandInfo, Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, System.Collections.Generic.IEnumerable<object>)')** `Method`
    Invokes command as a child of [this command base](CommandBase 'Guilded.Commands.CommandBase').
  - **[InvokeCommandByNameAsync(RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandBase.InvokeCommandByNameAsync(RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandBase.InvokeCommandByNameAsync(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)')** `Method`
    Filters [commands](CommandBase.Commands 'Guilded.Commands.CommandBase.Commands') and invokes any commands that were found. If none are found, [failed command event](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') is invoked.
- **[CommandConfiguration](CommandConfiguration 'Guilded.Commands.CommandConfiguration')** `Class`
  Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').
  - **[CommandConfiguration()](CommandConfiguration.CommandConfiguration() 'Guilded.Commands.CommandConfiguration.CommandConfiguration()')** `Constructor`
    Initializes the configuration of Guilded.NET's commands with `/` prefix.
  - **[CommandConfiguration(string, char[], StringSplitOptions)](CommandConfiguration.CommandConfiguration(string,char[],StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(string, char[], StringSplitOptions)')** `Constructor`
    Initializes the configuration of Guilded.NET's commands.
  - **[CommandConfiguration(string, StringSplitOptions)](CommandConfiguration.CommandConfiguration(string,StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(string, StringSplitOptions)')** `Constructor`
    Initializes the configuration of Guilded.NET's commands.
  - **[CommandConfiguration(StringSplitOptions)](CommandConfiguration.CommandConfiguration(StringSplitOptions) 'Guilded.Commands.CommandConfiguration.CommandConfiguration(StringSplitOptions)')** `Constructor`
    Initializes the configuration of Guilded.NET's commands with `/` prefix.
  - **[DefaultPrefix](CommandConfiguration.DefaultPrefix 'Guilded.Commands.CommandConfiguration.DefaultPrefix')** `Field`
    The prefix that will be used by default if not specified.
  - **[DefaultSeparators](CommandConfiguration.DefaultSeparators 'Guilded.Commands.CommandConfiguration.DefaultSeparators')** `Field`
    The default argument separator characters.
  - **[DefaultSplitOptions](CommandConfiguration.DefaultSplitOptions 'Guilded.Commands.CommandConfiguration.DefaultSplitOptions')** `Field`
    The default splitting options for command arguments.
  - **[Prefix](CommandConfiguration.Prefix 'Guilded.Commands.CommandConfiguration.Prefix')** `Property`
    Gets the piece of text with which commands need to start with.
  - **[Separators](CommandConfiguration.Separators 'Guilded.Commands.CommandConfiguration.Separators')** `Property`
    Gets the characters that separate command arguments.
  - **[SplitOptions](CommandConfiguration.SplitOptions 'Guilded.Commands.CommandConfiguration.SplitOptions')** `Property`
    Gets the splitting options that will be used while splitting command arguments.
- **[CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo')** `Class`
  Represents the information about types that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandContainerInfo(Type, CommandAttribute, CommandBase)](CommandContainerInfo.CommandContainerInfo(Type,CommandAttribute,CommandBase) 'Guilded.Commands.CommandContainerInfo.CommandContainerInfo(System.Type, Guilded.Commands.CommandAttribute, Guilded.Commands.CommandBase)')** `Constructor`
    Initializes a new instance of [CommandContainerInfo](CommandContainerInfo 'Guilded.Commands.CommandContainerInfo') from the type.
  - **[Instance](CommandContainerInfo.Instance 'Guilded.Commands.CommandContainerInfo.Instance')** `Property`
    Gets the created instance of [the command](CommandAttribute 'Guilded.Commands.CommandAttribute') type for this command.
  - **[SubCommands](CommandContainerInfo.SubCommands 'Guilded.Commands.CommandContainerInfo.SubCommands')** `Property`
    Gets the list of commands or sub-commands of this command.
- **[CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent')** `Class`
  Represents an event that occurs once someone invokes a command.
  - **[CommandEvent(RootCommandEvent, string, IEnumerable&lt;string&gt;)](CommandEvent.CommandEvent(RootCommandEvent,string,IEnumerable_string_) 'Guilded.Commands.CommandEvent.CommandEvent(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>)')** `Constructor`
    Initializes a new instance of [CommandEvent](CommandEvent 'Guilded.Commands.CommandEvent') from [a Created message](MessageEvent 'Guilded.Base.Events.MessageEvent').
  - **[Arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments')** `Property`
    Gets the enumerable of string arguments that were given to the command.
  - **[CommandName](CommandEvent.CommandName 'Guilded.Commands.CommandEvent.CommandName')** `Property`
    Gets the name of that was used in the command.
  - **[Prefix](CommandEvent.Prefix 'Guilded.Commands.CommandEvent.Prefix')** `Property`
    Gets the prefix that has been used on the command.
  - **[RootArguments](CommandEvent.RootArguments 'Guilded.Commands.CommandEvent.RootArguments')** `Property`
    Gets the enumerable of string arguments that were given to the root-level command in [the message](Message 'Guilded.Base.Content.Message').
  - **[RootCommand](CommandEvent.RootCommand 'Guilded.Commands.CommandEvent.RootCommand')** `Property`
    Getss the most-top command that was invoked.
  - **[RootCommandName](CommandEvent.RootCommandName 'Guilded.Commands.CommandEvent.RootCommandName')** `Property`
    Gets the name of the root-level command that was used in [the message](Message 'Guilded.Base.Content.Message').
- **[CommandFallbackAttribute](CommandFallbackAttribute 'Guilded.Commands.CommandFallbackAttribute')** `Class`
  Declares a method as a [failed command](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') handler.
  - **[CommandFallbackAttribute(FallbackType)](CommandFallbackAttribute.CommandFallbackAttribute(FallbackType) 'Guilded.Commands.CommandFallbackAttribute.CommandFallbackAttribute(Guilded.Commands.FallbackType)')** `Constructor`
    Declares a method as a failed command handler based on type.
  - **[Type](CommandFallbackAttribute.Type 'Guilded.Commands.CommandFallbackAttribute.Type')** `Property`
    Gets the type of [failed command](CommandBase.FailedCommand 'Guilded.Commands.CommandBase.FailedCommand') event to handle.
- **[CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo')** `Class`
  Represents the information about methods that were declared as [commands](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[CommandInfo(MethodInfo, CommandAttribute, IEnumerable&lt;ParameterInfo&gt;)](CommandInfo.CommandInfo(MethodInfo,CommandAttribute,IEnumerable_ParameterInfo_) 'Guilded.Commands.CommandInfo.CommandInfo(MethodInfo, Guilded.Commands.CommandAttribute, System.Collections.Generic.IEnumerable<ParameterInfo>)')** `Constructor`
    Initializes a new instance of [CommandInfo](CommandInfo 'Guilded.Commands.CommandInfo') from the method.
  - **[Arguments](CommandInfo.Arguments 'Guilded.Commands.CommandInfo.Arguments')** `Property`
    Gets the enumerable of command arguments that can be specified by users.
  - **[HasRestArgument](CommandInfo.HasRestArgument 'Guilded.Commands.CommandInfo.HasRestArgument')** `Property`
    Gets whether there is a rest argument for the command.
  - **[RequiredCount](CommandInfo.RequiredCount 'Guilded.Commands.CommandInfo.RequiredCount')** `Property`
    Gets whether there is a rest argument for the command.
  - **[InvokeAsync(CommandBase, CommandEvent, IEnumerable&lt;object&gt;)](CommandInfo.InvokeAsync(CommandBase,CommandEvent,IEnumerable_object_) 'Guilded.Commands.CommandInfo.InvokeAsync(Guilded.Commands.CommandBase, Guilded.Commands.CommandEvent, System.Collections.Generic.IEnumerable<object>)')** `Method`
    Invokes the command.
- **[CommandModule](CommandModule 'Guilded.Commands.CommandModule')** `Class`
  Represents the module that adds [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') to [Guilded clients](BaseGuildedClient 'Guilded.Base.BaseGuildedClient').
  - **[AddTo(AbstractGuildedClient, CommandConfiguration)](CommandModule.AddTo(AbstractGuildedClient,CommandConfiguration) 'Guilded.Commands.CommandModule.AddTo(Guilded.AbstractGuildedClient, Guilded.Commands.CommandConfiguration)')** `Method`
    Adds the command module to the specified client with the given settings.
  - **[DoCommandsAsync(MessageEvent, string, CommandConfiguration)](CommandModule.DoCommandsAsync(MessageEvent,string,CommandConfiguration) 'Guilded.Commands.CommandModule.DoCommandsAsync(Guilded.Base.Events.MessageEvent, string, Guilded.Commands.CommandConfiguration)')** `Method`
    Checks if any [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') are called in the message and invokes them.
  - **[Remove()](CommandModule.Remove() 'Guilded.Commands.CommandModule.Remove()')** `Method`
    Removes the command module from the subscribed client.
- **[CommandOptionalArgumentInfo](CommandOptionalArgumentInfo 'Guilded.Commands.CommandOptionalArgumentInfo')** `Class`
  Represents the information about one-value command argument in .
  - **[CommandOptionalArgumentInfo(ParameterInfo, Type)](CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo,Type) 'Guilded.Commands.CommandOptionalArgumentInfo.CommandOptionalArgumentInfo(ParameterInfo, System.Type)')** `Constructor`
    Initializes a new instance of [CommandArgumentInfo](CommandArgumentInfo 'Guilded.Commands.CommandArgumentInfo') from a parameter.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandOptionalArgumentInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandOptionalArgumentInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[CommandParamAttribute](CommandParamAttribute 'Guilded.Commands.CommandParamAttribute')** `Class`
  Declares a parameter as a [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') parameter.
  - **[CommandParamAttribute()](CommandParamAttribute.CommandParamAttribute() 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute()')** `Constructor`
    Declares a command parameter with the display name as the parameter's name.
  - **[CommandParamAttribute(string)](CommandParamAttribute.CommandParamAttribute(string) 'Guilded.Commands.CommandParamAttribute.CommandParamAttribute(string)')** `Constructor`
    Declares a command parameter with the specified name.
  - **[Name](CommandParamAttribute.Name 'Guilded.Commands.CommandParamAttribute.Name')** `Property`
    Gets the displayed name of the parameter.
- **[CommandRestInfo](CommandRestInfo 'Guilded.Commands.CommandRestInfo')** `Class`
  Represents the information about array command argument in .
  - **[CommandRestInfo(ParameterInfo)](CommandRestInfo.CommandRestInfo(ParameterInfo) 'Guilded.Commands.CommandRestInfo.CommandRestInfo(ParameterInfo)')** `Constructor`
    Initializes a new instance of [CommandRestInfo](CommandRestInfo 'Guilded.Commands.CommandRestInfo') from a parameter.
  - **[GetValueFrom(IEnumerable&lt;string&gt;, int)](CommandRestInfo.GetValueFrom(IEnumerable_string_,int) 'Guilded.Commands.CommandRestInfo.GetValueFrom(System.Collections.Generic.IEnumerable<string>, int)')** `Method`
    Gets the value for [the argument](AbstractCommandArgument 'Guilded.Commands.AbstractCommandArgument') of [the provided invokation arguments](CommandEvent.Arguments 'Guilded.Commands.CommandEvent.Arguments') and current index.
- **[DescriptionAttribute](DescriptionAttribute 'Guilded.Commands.DescriptionAttribute')** `Class`
  Defines a description for a command.
  - **[DescriptionAttribute(string)](DescriptionAttribute.DescriptionAttribute(string) 'Guilded.Commands.DescriptionAttribute.DescriptionAttribute(string)')** `Constructor`
    Defines a description for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute') with text.
  - **[Text](DescriptionAttribute.Text 'Guilded.Commands.DescriptionAttribute.Text')** `Property`
    Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description.
- **[ExampleAttribute](ExampleAttribute 'Guilded.Commands.ExampleAttribute')** `Class`
  Defines an example for a command.
  - **[ExampleAttribute(string, string)](ExampleAttribute.ExampleAttribute(string,string) 'Guilded.Commands.ExampleAttribute.ExampleAttribute(string, string)')** `Constructor`
    Defines an example for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[ExampleAttribute(string)](ExampleAttribute.ExampleAttribute(string) 'Guilded.Commands.ExampleAttribute.ExampleAttribute(string)')** `Constructor`
    Defines an example for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[Content](ExampleAttribute.Content 'Guilded.Commands.ExampleAttribute.Content')** `Property`
    Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage.
  - **[Name](ExampleAttribute.Name 'Guilded.Commands.ExampleAttribute.Name')** `Property`
    Gets [the name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') or [the alias](CommandAttribute.Aliases 'Guilded.Commands.CommandAttribute.Aliases') of [the command](CommandAttribute 'Guilded.Commands.CommandAttribute') in the example.
- **[FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent')** `Class`
  Represents an event that occurs once someone invokes a command.
  - **[FailedCommandEvent(RootCommandEvent, string, IEnumerable&lt;string&gt;, FallbackType)](FailedCommandEvent.FailedCommandEvent(RootCommandEvent,string,IEnumerable_string_,FallbackType) 'Guilded.Commands.FailedCommandEvent.FailedCommandEvent(Guilded.Commands.RootCommandEvent, string, System.Collections.Generic.IEnumerable<string>, Guilded.Commands.FallbackType)')** `Constructor`
    Initializes a new instance of [FailedCommandEvent](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').
  - **[FailType](FailedCommandEvent.FailType 'Guilded.Commands.FailedCommandEvent.FailType')** `Property`
    Gets the type of the error that occurred.
- **[UsageAreaAttribute](UsageAreaAttribute 'Guilded.Commands.UsageAreaAttribute')** `Class`
  Defines possible usage location for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[UsageAreaAttribute(CommandArea)](UsageAreaAttribute.UsageAreaAttribute(CommandArea) 'Guilded.Commands.UsageAreaAttribute.UsageAreaAttribute(Guilded.Commands.CommandArea)')** `Constructor`
    Defines possible usage location for [a command](CommandAttribute 'Guilded.Commands.CommandAttribute').
  - **[Area](UsageAreaAttribute.Area 'Guilded.Commands.UsageAreaAttribute.Area')** `Property`
    Gets the area where [commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be used.
- **[RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent')** `Struct`
  Represents the information about the root/original command.
  - **[RootCommandEvent(MessageEvent, string, string, IEnumerable&lt;string&gt;)](RootCommandEvent.RootCommandEvent(MessageEvent,string,string,IEnumerable_string_) 'Guilded.Commands.RootCommandEvent.RootCommandEvent(Guilded.Base.Events.MessageEvent, string, string, System.Collections.Generic.IEnumerable<string>)')** `Constructor`
    Initializes a new instance of [RootCommandEvent](RootCommandEvent 'Guilded.Commands.RootCommandEvent').
  - **[MessageEvent](RootCommandEvent.MessageEvent 'Guilded.Commands.RootCommandEvent.MessageEvent')** `Property`
    Gets the message event that invoked the command.
  - **[Prefix](RootCommandEvent.Prefix 'Guilded.Commands.RootCommandEvent.Prefix')** `Property`
    Gets the prefix that was fetched for the command.
  - **[RootArguments](RootCommandEvent.RootArguments 'Guilded.Commands.RootCommandEvent.RootArguments')** `Property`
    Gets the given arguments to the original command.
  - **[RootCommandName](RootCommandEvent.RootCommandName 'Guilded.Commands.RootCommandEvent.RootCommandName')** `Property`
    Gets the name of the original command that was used.
- **[ICommandInfo&lt;TMember&gt;](ICommandInfo_TMember_ 'Guilded.Commands.ICommandInfo<TMember>')** `Interface`
  Represents the interface for all commands.
  - **[Aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases')** `Property`
    Gets the alternative names of the command.
  - **[Attribute](ICommandInfo_TMember_.Attribute 'Guilded.Commands.ICommandInfo<TMember>.Attribute')** `Property`
    Gets the [command attribute](CommandAttribute 'Guilded.Commands.CommandAttribute') that was given to the [member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member').
  - **[Description](ICommandInfo_TMember_.Description 'Guilded.Commands.ICommandInfo<TMember>.Description')** `Property`
    Gets the text that represents [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') description.
  - **[Examples](ICommandInfo_TMember_.Examples 'Guilded.Commands.ICommandInfo<TMember>.Examples')** `Property`
    Gets the example of [command's](CommandAttribute 'Guilded.Commands.CommandAttribute') usage.
  - **[Member](ICommandInfo_TMember_.Member 'Guilded.Commands.ICommandInfo<TMember>.Member')** `Property`
    Gets the member who was declared as a command.
  - **[Name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name')** `Property`
    Gets the [name](CommandAttribute.Name 'Guilded.Commands.CommandAttribute.Name') of the command.
  - **[HasName(string)](ICommandInfo_TMember_.HasName(string) 'Guilded.Commands.ICommandInfo<TMember>.HasName(string)')** `Method`
    Gets whether the name matches command's [name](ICommandInfo_TMember_.Name 'Guilded.Commands.ICommandInfo<TMember>.Name') or its [aliases](ICommandInfo_TMember_.Aliases 'Guilded.Commands.ICommandInfo<TMember>.Aliases').
- **[CommandArea](CommandArea 'Guilded.Commands.CommandArea')** `Enum`
  Represents where [the commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be used.
  - **[Anywhere](CommandArea#Guilded.Commands.CommandArea.Anywhere 'Guilded.Commands.CommandArea.Anywhere')** `Field`
    [The commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be anywhere.
  - **[Dms](CommandArea#Guilded.Commands.CommandArea.Dms 'Guilded.Commands.CommandArea.Dms')** `Field`
    [The commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be used only in DMs.
  - **[Servers](CommandArea#Guilded.Commands.CommandArea.Servers 'Guilded.Commands.CommandArea.Servers')** `Field`
    [The commands](CommandAttribute 'Guilded.Commands.CommandAttribute') can be used only in servers.
- **[FallbackType](FallbackType 'Guilded.Commands.FallbackType')** `Enum`
  Represents the type of [sub command failure](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent').
  - **[NoCommandFound](FallbackType#Guilded.Commands.FallbackType.NoCommandFound 'Guilded.Commands.FallbackType.NoCommandFound')** `Field`
    The [sub-command/command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') with the specified name or arguments does not exist.
  - **[Unspecified](FallbackType#Guilded.Commands.FallbackType.Unspecified 'Guilded.Commands.FallbackType.Unspecified')** `Field`
    The parent command was called with the name of [sub-command](FailedCommandEvent 'Guilded.Commands.FailedCommandEvent') not given.