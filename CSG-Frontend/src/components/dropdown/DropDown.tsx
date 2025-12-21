import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './dropDown.css';

interface DropDownProps {
  title: string;
  members: string[];
}

export default function DropDown({ title, members }: DropDownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`icon ${isOpen ? 'rotated' : ''}`}>
          <ChevronDown size={24} />
        </span>
      </div>

      {isOpen && (
        <ul className="dropdown-list">
          {members.map((member, index) => (
            <li key={index} className="dropdown-item">{member}</li>
          ))}
        </ul>
      )}
    </div>
  );
}