import type { Filter } from '../Types/interface';

interface FilterButtonsProps {
    activeFilter: Filter;
    onFilterChange: (filter: Filter) => void;
    activeCount: number;
    inactiveCount: number;
    totalCount: number;
}

export default function FilterButtons({
    activeFilter,
    onFilterChange,
    activeCount,
    inactiveCount,
    totalCount
}: FilterButtonsProps) {
    const filters: { key: Filter; label: string; count: number }[] = [
        { key: 'All', label: 'All', count: totalCount },
        { key: 'Active', label: 'Active', count: activeCount },
        { key: 'Inactive', label: 'Inactive', count: inactiveCount },
    ];

    return (
        <div className="flex gap-2">
            {filters.map(({ key, label, count }) => (
                <button
                    key={key}
                    onClick={() => onFilterChange(key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${activeFilter === key
                            ? 'bg-red-500 text-white shadow-lg'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                        }`}
                >
                    {label}
                    <span className="ml-2 text-xs opacity-75">({count})</span>
                </button>
            ))}
        </div>
    );
}