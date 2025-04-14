import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div
            className={className}
            style={{
                backgroundColor: 'white',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                display: 'flex',
            }}
        >
            <div style={{ width: '50%' }}>
                <label
                    htmlFor={amountInputId}
                    style={{
                        color: 'rgba(0, 0, 0, 0.4)',
                        marginBottom: '8px',
                        display: 'inline-block',
                    }}
                >
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    style={{
                        outline: 'none',
                        width: '100%',
                        backgroundColor: 'transparent',
                        padding: '6px 0',
                        fontSize: 'inherit',
                        border: 'none',
                    }}
                />
            </div>
            <div
                style={{
                    width: '50%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    textAlign: 'right',
                }}
            >
                <p
                    style={{
                        color: 'rgba(0, 0, 0, 0.4)',
                        marginBottom: '8px',
                        width: '100%',
                    }}
                >
                    Currency Type
                </p>
                <select
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    style={{
                        borderRadius: '8px',
                        padding: '4px 6px',
                        backgroundColor: '#f3f4f6',
                        cursor: 'pointer',
                        outline: 'none',
                        fontSize: 'inherit',
                        border: 'none',
                    }}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
