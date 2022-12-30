import { Select} from 'antd';
import 'antd/dist/antd.min.css';

import './styles/dropdown-input.css';

export const DropdownInput = (props) => {
  const { label, options, onChange, placeHolder, value, id, className } = props;
  const { Option } = Select;
  return (
    <div className={`input-container ${className}`}>
      <label htmlFor="select">{label}</label>
        <Select className="investment-select-input" placeholder={placeHolder} onChange={onChange} value={value} id={id}>
          {options.map((opt) => {
            return (
              <Option key={opt.id} value={opt.value}>
                {opt.name}
              </Option>
            );
          })}
        </Select>
    </div>
  );
};
