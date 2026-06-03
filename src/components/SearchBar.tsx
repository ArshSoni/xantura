interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

export const SearchBar = ({
	value,
	onChange
}: SearchBarProps) => {
	return (
		<div>
			<input
				type="text"
				className="border p-3 rounded w-full"
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
		</div>
	)
}