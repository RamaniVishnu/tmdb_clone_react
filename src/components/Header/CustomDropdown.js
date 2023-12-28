import { useState,useEffect } from 'react';

   export default function CustomDropdown({ label, options,itemName, index, openDropdownIndex, setOpenDropdownIndex }) {
        const isOpen = index === openDropdownIndex;
      
        const [selectedItem, setSelectedItem] = useState(itemName);
      
        const handleItemClick = (item) => {
          setSelectedItem(item);
          setOpenDropdownIndex(null);
        };
      
        const handleDropdownToggle = () => {
          setOpenDropdownIndex(isOpen ? null : index);
        };
      
        const handleOutsideClick = (event) => {
          if (!event.target.closest('.custom-dropdown')) {
            setOpenDropdownIndex(null);
          }
        };
      
        // Attach click event listener to the document for closing dropdown on outside click
        useEffect(() => {
          document.addEventListener('click', handleOutsideClick);
          return () => {
            document.removeEventListener('click', handleOutsideClick);
          };
        }, []);
      
        return (
          <div className="custom-dropdown">
            <div className="selected-item" onClick={handleDropdownToggle}>
              {selectedItem}
            </div>
            {isOpen && (
              <ul className="dropdown-list">
                {options.map((option, optionIndex) => (
                  <li key={optionIndex} onClick={() => handleItemClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      
