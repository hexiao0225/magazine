import React from "react";
import Table from 'react-bootstrap/Table'

const Calendar = () => {
    return(
        <Table responsive>
            <tbody>
                <tr>
                <td>28</td>
                <td>29</td>
                <td className="calendar-block">30 <div className="calendar-item">Letter from the editor</div></td>
                <td>Jul 1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                </tr>
                <tr>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td className="calendar-block">9 <div className="calendar-item">A Time <br></br>in <br></br>History</div></td>
                <td>10</td>
                <td>11</td>
                </tr>
                <tr>
                <td className="calendar-block">12 <div className="calendar-item">Drawing Technique</div> </td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                </tr>
                <tr>
                <td>19</td>
                <td>20</td>
                <td>21</td>
                <td className="calendar-block">22 <div className="calendar-item">Peak</div></td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                </tr>
                <tr>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
                <td className="calendar-block">31 <div className="calendar-item">The End</div></td>
                <td>Aug 1</td>
                </tr>
            </tbody>
</Table>
    )
};

export default Calendar;
