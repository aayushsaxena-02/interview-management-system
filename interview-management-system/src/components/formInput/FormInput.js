'use client';
import { useEffect } from "react";
// import styles from './FormInput.module.css'

export default function FormInput ({label,name,type,onChange}) {

    useEffect(() => {
        if (type === 'number') {
          const numberInput = document.querySelector(`input[name="${name}"]`);
          
          if (numberInput) {
            numberInput.addEventListener('wheel', (e) => {
              e.preventDefault(); // Prevent scrolling in number inputs
            });
          }
    
          // Clean up the event listener when component unmounts
          return () => {
            if (numberInput) {
              numberInput.removeEventListener('wheel', (e) => {
                e.preventDefault();
              });
            }
          };
        }
      }, [name, type]);

    return (
        <div>
            <p className="mb-2 font-sans subpixel-antialiased text-zinc-900">{label}</p>
            <input 
                className="border-2 rounded-md border-gray-200 py-1.5 pl-4 pr-40 mr-1"
                required
                name = {name}
                type = {type} 
                onChange = {onChange}
            />
        </div>
    )
}