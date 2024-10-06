import React from 'react'

function BankDetails()
{
    return(
        <div className='smallCompo'>
            <h5>Bank Details For Refund of Fee (Only AccountNumber and IFSC code used for refund. Fill them with caution)</h5>

            <table width = "100%">
                <tbody>
                    <tr>
                        <td>
                            <label>
                                Name of Account Holder <br/>
                                <input type="text"/>
                            </label>
                        </td>
                        <td>
                            <label>
                                Account Number <br/>
                                <input type="text"/>
                            </label>
                        </td>
                        <td>
                            <label>
                                Confirm Account Number <br/>
                                <input type="text"/>
                            </label>
                        </td>
                    </tr>

                    <tr>

                    <td>
                        <label>
                                IFSC Code <br/>
                                <input type="text"/>
                                <button>Confirm</button>
                        </label>
                    </td>

                    <td>
                        <label>
                                 Name of Bank <br/>
                                <input type="text"/>
                        </label>
                    </td>

                    <td>
                        <label>
                                Bank Address <br/>
                                <input type="text"/>
                        </label>
                    </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BankDetails