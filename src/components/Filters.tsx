
export type SortType = 'asc' | 'desc';

interface FiltersProps {
	value: string;
	onChange: (value: SortType) => void
}

export const Filters = ({
	value = '',
	onChange
}: FiltersProps) => {
	return (
		<select
			className="border p-3 rounded"
			value={value}
			onChange={e => onChange(e.target.value as SortType)}
		>
			<option value="" disabled>Sort by</option>
			<option value="asc">Price Low to High</option>
			<option value="desc">Price High to Low</option>
		</select>
	)
}