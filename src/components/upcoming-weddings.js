import React from 'react';
import { Link } from 'react-router-dom';

export default function UpcomingWeddings() {
    return (
    <div>
        <Link to="/newclient">+</Link>
    <h2>Upcoming Weddings</h2>
    <table>
       <tbody>
            <tr>
                <th>Date</th>
                <th>Bride</th>
                <th>Venue</th>
            </tr>
            <tr>
                <td>6/2/18</td>
                <td>Vivian Wan</td>
                <td>Pelican Hill</td>
            </tr>
            <tr>
                <td>6/13/18</td>
                <td>Laura Morton</td>
                <td>Pizzeria</td>
            </tr>
            <tr>
                <td>6/14/18</td>
                <td>Stephanie Kim</td>
                <td>Langham</td>
            </tr>
        </tbody>
    </table>

    
    </div>
    )

}