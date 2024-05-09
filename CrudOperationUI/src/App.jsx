import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-blue-600 p-2 text-white rounded-lg'><p>+ Create Invoice</p></div>

        <div className='flex'>
          <div>
            <input className='p-2 ring-2 ring-blue-100' type="text" placeholder='Search Invoice' />
          </div>

          <div className='ml-10'>
            <input type="text"
            placeholder='Invoice Status'
            className='p-2 ring-2 ring-blue-100'
            />
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>

      <br /><br />

      <div>
        <table>
          <tr className='flex justify-evenly font-bold gap-2'>
            <td className='pr-8 pl-8 ring-1 ring-black'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8 ring-1 ring-black'>#</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>STATUS</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>CLIENT</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>TOTAL</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>ISSUED DATE</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>BALANCE</td>

            <td className='pr-8 pl-8 ring-1 ring-black'>ACTIONS</td>

          </tr>


          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5036</td>

            <td className='pr-8 pl-8'>Done</td>

            <td className='pr-8 pl-8'>Andrew Burns</td>

            <td className='pr-8 pl-8'>$3171</td>

            <td className='pr-8 pl-8'>2024-03-19</td>

            <td className='pr-8 pl-8'>-$205</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />



          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5035</td>

            <td className='pr-8 pl-8'>Regret</td>

            <td className='pr-8 pl-8'>Dana Carey</td>

            <td className='pr-8 pl-8'>$4263</td>

            <td className='pr-8 pl-8'>2024-03-20</td>

            <td className='pr-8 pl-8'>$2762</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className=''>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5034</td>

            <td className='pr-8 pl-8'>Done</td>

            <td className='pr-8 pl-8'>Tammy Sanchez</td>

            <td className='pr-8 pl-8'>$4836</td>

            <td className='pr-8 pl-8'>2024-03-10</td>

            <td className='pr-8 pl-8'>paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5033</td>

            <td className='pr-8 pl-8'>Progress</td>

            <td className='pr-8 pl-8'>Lori Wells</td>

            <td className='pr-8 pl-8'>$2869</td>

            <td className='pr-8 pl-8'>2024-03-12</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5032</td>

            <td className='pr-8 pl-8'>Not</td>

            <td className='pr-8 pl-8'>Richard Payne</td>

            <td className='pr-8 pl-8'>$5181</td>

            <td className='pr-8 pl-8'>2024-03-31</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />


          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5031</td>

            <td className='pr-8 pl-8'>Progress</td>

            <td className='pr-8 pl-8'>Jennifer Summers</td>

            <td className='pr-8 pl-8'>$3313</td>

            <td className='pr-8 pl-8'>2024-03-21</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5030</td>

            <td className='pr-8 pl-8'>Saved</td>

            <td className='pr-8 pl-8'>Justin Richardson</td>

            <td className='pr-8 pl-8'>$5565</td>

            <td className='pr-8 pl-8'>2024-03-07</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5029</td>

            <td className='pr-8 pl-8'>Done</td>

            <td className='pr-8 pl-8'>Nicholas Tanner</td>

            <td className='pr-8 pl-8'>$3851</td>

            <td className='pr-8 pl-8'>2024-03-29</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5028</td>

            <td className='pr-8 pl-8'>Done</td>

            <td className='pr-8 pl-8'>Crystal Mays</td>

            <td className='pr-8 pl-8'>$3325</td>

            <td className='pr-8 pl-8'>2024-03-18</td>

            <td className='pr-8 pl-8'>$361</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

          <tr className='flex justify-evenly gap-2'>
            <td className='pr-8 pl-8'>
              <input type="checkbox" />
            </td>

            <td className='pr-8 pl-8'>#5027</td>

            <td className='pr-8 pl-8'>Email</td>

            <td className='pr-8 pl-8'>Mary Garcia</td>

            <td className='pr-8 pl-8'>$2719</td>

            <td className='pr-8 pl-8'>2024-03-13</td>

            <td className='pr-8 pl-8'>Paid</td>

            <td className='pr-8 pl-8'>ACTIONS</td>

          </tr>

          <hr />

        </table>
      </div>
    </>
  )
}

export default App
