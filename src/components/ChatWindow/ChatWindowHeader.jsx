import InitialsAvatar from "../User/InitialsAvatar";

function ChatWindowHeader({ contact }) {
	return (
		<div className="w-full bg-white h-16 flex-shrink-0 p-3 items-center flex gap-2 border-y border-gray-300" >
			<InitialsAvatar user={contact} isHeader={true} />
			<div className="font-semibold truncate">{`${contact.name} ${contact.surname}`}</div>
		</div>
	)
}

export default ChatWindowHeader;