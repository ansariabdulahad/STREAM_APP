"use client";

import { Button } from "../../../Tailwind";

const Jobs = () => {

    const table = [
        {
            JobId: "zdfsdf",
            Input: "zsfsdf",
            CreatedAt: "adfsdf",
            Status: "asfbjds",
            Percentage: "sdfhsd"
        },
        {
            JobId: "zdfsdf",
            Input: "zsfsdf",
            CreatedAt: "adfsdf",
            Status: "asfbjds",
            Percentage: "sdfhsd"
        },
        {
            JobId: "zdfsdf",
            Input: "zsfsdf",
            CreatedAt: "adfsdf",
            Status: "asfbjds",
            Percentage: "sdfhsd"
        },
        {
            JobId: "zdfsdf",
            Input: "zsfsdf",
            CreatedAt: "adfsdf",
            Status: "asfbjds",
            Percentage: "sdfhsd"
        },
        {
            JobId: "zdfsdf",
            Input: "zsfsdf",
            CreatedAt: "adfsdf",
            Status: "asfbjds",
            Percentage: "sdfhsd"
        }
    ]

    const Tr = ({ item, index }) => {
        const tr = (
            <tr className={`bg-gray-300 
            ${index % 2 === 0 ? "text-black" : "text-white"}
            `}>
                <td>{item.JobId}</td>
                <td>{item.Input}</td>
                <td>{item.CreatedAt}</td>
                <td>{item.Status}</td>
                <td>{item.Percentage}</td>
            </tr>
        );
        return tr;
    }

    const design = (
        <>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-white font-bold">
                    All Jobs
                </h1>
                <Button theme="error">Next</Button>
            </div>
            <table className="table shadow-lg text-center table-striped text-white">
                <thead>
                    <tr>
                        {
                            Object.keys(table[0]).map((key, index) => {
                                return <th key={index}>{key}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        table.map((item, index) => {
                            return <Tr key={index} item={item} index={index + 1} />
                        })
                    }
                </tbody>
            </table>
        </>
    );
    return design;
}

export default Jobs;