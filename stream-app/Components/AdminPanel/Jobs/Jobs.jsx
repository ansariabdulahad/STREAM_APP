"use client";

import useSWR from "swr";
import { Button } from "../../../Tailwind";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import moment from "moment";

const Jobs = () => {

    const [token, setToken] = useState("");
    const [deleting, setDeleting] = useState(false);

    const columns = [
        "JobId",
        "Input",
        "CreatedAt",
        "Status",
        "Percentage",
        "Actions"
    ];

    const getData = async (url) => {
        try {
            const response = await axios({
                method: "GET",
                url: url,
            });
            return response.data.data;

        } catch (error) {
            return error.response.data;
        }
    }

    // USE SWR TO GET DATA BEFORE COMPONENT LOADS
    const { data, error } = useSWR(`/api/media-convert?token=${token}`, getData, { refreshInterval: 5000 }); // refresh interval is set to automatically refresh every 3 seconds.

    const cancle = async (id) => {
        setDeleting(true);

        await axios({
            method: 'DELETE',
            url: '/api/media-convert/' + id
        });
    }

    const Tr = ({ item, index }) => {

        const input = item.Settings.Inputs[0].FileInput.split('/');
        // const dateObj = new Date(item.CreatedAt);
        // let dd = dateObj.getDate();
        // let mm = dateObj.getMonth() + 1;
        // let yy = dateObj.getFullYear();
        // let liveDate = dd <= 10 ? "0" + dd + "-" + "0" + mm + "-" + yy : dd + "-" + mm + "-" + yy;

        const tr = (
            <tr className={`bg-gray-300 
            ${index % 2 === 0 ? "text-black" : "text-white"}
            `}>
                <td style={{ verticalAlign: "middle" }}>{item.Id}</td>
                <td style={{ verticalAlign: "middle" }}>{input[input.length - 1]}</td>
                <td style={{ verticalAlign: "middle" }}>
                    {
                        moment(item.CreatedAt).format('MMMM Do YYYY, h:mm:ss a')
                    }
                </td>
                <td style={{ verticalAlign: "middle" }}>{item.Status}</td>
                <td style={{ verticalAlign: "middle" }}>
                    {
                        item.Status === "PROGRESSING"
                            ?
                            (
                                item.JobPercentComplete
                                    ? item.JobPercentComplete + "%"
                                    : "0%"
                            )
                            : item.Status
                    }
                </td>
                <td>
                    {
                        item.Status === "PROGRESSING"
                            ? deleting
                                ? <i className="fa fa-spinner fa-spin" style={{ fontSize: "30px" }}></i>
                                : <Button
                                    theme="error"
                                    onClick={() => cancle(item.Id)}
                                >Cancle</Button>
                            : null
                    }
                </td>
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
                <Button
                    theme={data?.NextToken ? "error" : "disabled"}
                    onClick={() => setToken(data.NextToken)}
                    disabled={data && data.NextToken ? false : true}
                >
                    Next
                </Button>
            </div>
            <div className="table-responsive">
                <table className="table shadow-lg text-center table-striped text-white">
                    <thead>
                        <tr>
                            {
                                // Object.keys(table[0])
                                columns.map((key, index) => {
                                    return <th key={index}>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.Jobs && data.Jobs.map((item, index) => {
                                return <Tr key={index} item={item} index={index + 1} />
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                data && data.Jobs || error ? null : <Loader />
            }
        </>
    );
    return design;
}

export default Jobs;