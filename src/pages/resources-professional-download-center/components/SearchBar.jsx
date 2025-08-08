import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search resources..." }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted">
        <Icon name="Search" size={18} />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e?.target?.value)}
        className="pl-10 pr-4 py-3 w-full bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-brand"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary transition-brand"
        >
          <Icon name="X" size={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;