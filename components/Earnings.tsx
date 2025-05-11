import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"


const data = Array.from({ length: 10 }).map(() => ({
  account: "0x1f20e...e2026",
  amountIn: "1,000.00",
  amountOut: "2,500.00",
  price: "$2.50",
  value: "$2,500.00",
  earnedFee: "$0.05",
  time: "1 day ago",
}))

export default function EarningsPage() {
  return (
    <section className="bg-[#0d0d0d] min-h-screen text-white">
        
        <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">Earnings</h1>
        
        <div className="flex gap-2 bg-[#1a1a1a] p-1 rounded-md">
            {["1D", "1W", "1M", "ALL"].map((label) => (
            <Button
                key={label}
                className={`px-3 py-1 text-sm rounded-md cursor-pointer ${
                label === "1D"
                    ? "bg-[#333] text-white"
                    : "bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white"
                }`}
                variant="ghost"
            >
                {label}
            </Button>
            ))}
        </div>
        </div>


        <Card className="bg-[#1a1a1a] !border-none">
            <CardContent className="p-0">

            <div className="overflow-x-auto">
                <Table>

                <TableHeader className="bg-[#1a1a1a]">
                    <TableRow className="border-none hover:bg-[#1a1a1a]">
                    <TableHead className="text-gray-400 px-4 py-3">Account</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Amount In</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Amount Out</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Price</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Value</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Earned Fee</TableHead>
                    <TableHead className="text-gray-400 px-4 py-3">Time</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((tx, i) => (
                    <TableRow key={i} className="bg-neutral-800 border border-neutral-700 hover:bg-[#222] text-neutral-200 font-medium">
                        <TableCell className="px-4 py-3">
                        <div className="flex items-center gap-2">
                            <img src="/design.png" alt="Account Logo" className="w-6 h-6 rounded-full" />
                            <span>{tx.account}</span>
                        </div>
                        </TableCell>
                        <TableCell className="px-4 py-3 ">{tx.amountIn} <span className="text-neutral-500">SUI</span></TableCell>
                        <TableCell className="px-4 py-3">{tx.amountOut} <span className="text-neutral-500">USDC</span></TableCell>
                        <TableCell className="px-4 py-3">{tx.price}</TableCell>
                        <TableCell className="px-4 py-3">{tx.value}</TableCell>
                        <TableCell className="px-4 py-3">{tx.earnedFee}</TableCell>
                        <TableCell className="px-4 py-3">{tx.time}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>

                </Table>

            </div>


            <div className="flex justify-between items-center w-full px-4 py-4 border-t border-[#2a2a2a]">
        
                {/* Dropdown */}
                <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button className="bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-md px-4 py-2 text-sm font-normal">
                            10 Transaction <ChevronDown className="w-4 h-4 ml-2 text-neutral-400" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#1a1a1a] text-white border border-[#2a2a2a]">
                        <DropdownMenuItem>10</DropdownMenuItem>
                        <DropdownMenuItem>20</DropdownMenuItem>
                        <DropdownMenuItem>50</DropdownMenuItem>
                        </DropdownMenuContent>
                </DropdownMenu>

                {/* Pagination */}
                <div className="flex items-center gap-2">
                    {[1, 2, 3, "...", 7, 8, 9].map((page, idx) => (
                    <Button
                        key={idx}
                        className={`w-9 h-9 p-0 rounded-md border cursor-pointer border-[#2a2a2a] ${
                            page === 1
                                ? "bg-[#333] text-white"
                                : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:text-white"
                            }`}
                            variant="ghost"
                >
                        {page}
                    </Button>
                    ))}
                </div>

                {/* Page Buttons */}
                <div className="flex items-center gap-2">
                    
                    <Button className="w-9 h-9 p-0 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-md hover:bg-[#2a2a2a]">
                    <ChevronLeft className="w-4 h-4" />
                    </Button>

                    <Button className="w-9 h-9 p-0 bg-[#1a1a1a] text-white border border-[#2a2a2a] rounded-md hover:bg-[#2a2a2a]">
                    <ChevronRight className="w-4 h-4" />
                    </Button>

                </div>

            </div>

            </CardContent>

        </Card>

    </section>
  )
}
