import { Card } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"

export function CreditCards() {
  return (
    <ScrollArea className="w-full">
      <div className="grid md:grid-cols-2 gap-3 md:gap-6 pb-2">
        <Card className="relative min-w-[300px] sm:min-w-[360px] flex flex-col h-[200px] bg-gradient-to-r from-gray-800 to-gray-700 dark:from-[#2D3648] dark:to-[#3B465C] text-white rounded-2xl shadow-lg shrink-0">
          <div className="flex justify-between px-6 pt-6 mb-4">
            <div>
              <div className="text-xs opacity-80 mb-1 text-zinc-400">Balance</div>
              <div className="text-xl font-semibold">$5,756</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 35 35">
              <image width="35" height="35" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKQSURBVHgB7dfPSxRhHMfx72z2w1qt6MelDhFFVP4oaA+Ft7rYcTt0yUNEpwgKOnToEOGlQ/0DQngIiiKoDCSSNqKgpA0PQhmiW2hFli0LYpn29P76jAiyM/M8UephP/Byx32+s/Mw8zwzz4hUUj5BuS+NMbV8bEc6quYvY1DCuyAIxuIrjdmGaxjGD/w2/zb6e+PoxyWsKteJFM6hZOY3n5CZ25ksfpmFyQC2aD8CNjbyOYiVsnB5huYUf46V6UgHUkEYsQP5MPrEL12owzLci6lrQkbPTLduzGn8hk5Mhv8Pow064F6gRpLzAQ3YgRM4gnUx9a06XsYcr20PanDTsf4ktuKnY32HXqZqcctOrBY7vlzyHvvEXiKXpLUzrjc1vTwj2OVYvxfP8dWxfno2XXSoG8J97MZDLHXY5zMaxU6Oo5J8BQrBzByPCxOqQF0Lm1ewQdzTi+Pox5qE2mKVuI0BvZQHPTuiqQvprSGXUPskJYsolc5EpdKZqOhsKsj/zRSKDscpimu4zzTgsnFf94zgvD7PXI9RRXHS/NfoerUdF/BR7M1vSUy9Pjay0BXBaY5xiM8VEp8eMX65g2pcjanRM6crx1q8Me7JaWd8F92nsAnfI9qfIo0bxi+PdTaNil/Oih1sdyPa28UuqLLil5J2pttvH9ks9p0qH9H+GgfEfR0zk7x25pb4RW8HuhyYjGgfx3LxywQeaWeuY8BjR50pBdRHtOua55X4RU/Iy+ktBs9+FBwHWquxa+G+iPbbYXvOuCVv7Ov0bPiiCW8TdhwMD3QmpkbfSjPYY+wrcly6sL7suTJ2SragE6NmdtrrdhvWohFfEg7SG9bW4wEmwu+nMGTsG0YzFtWzsRKn/AEFnv4Krl8CzAAAAABJRU5ErkJggg==" />
            </svg>
          </div>
          <div className="mb-4 px-6">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <div className="opacity-80 text-zinc-400">CARD HOLDER</div>
                <div className="text-white">Eddy Cusuma</div>
              </div>
              <div className="text-xs">
                <div className="opacity-80 text-zinc-400">VALID THRU</div>
                <div className="text-white">12/22</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between w-full bg-gradient-to-b from-gray-600 to-gray-900 dark:from-zinc-600 dark:to-zinc-900 px-6 py-2 rounded-xl">
            <div className="text-base tracking-wider">3778 **** **** 1234</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-white opacity-60 rounded-full"></div>
              <div className="w-6 h-6 relative right-2 bg-white opacity-70 rounded-full -ml-2"></div>
            </div>
          </div>
        </Card>


        <Card className="relative min-w-[300px] sm:min-w-[360px] flex flex-col h-[200px] bg-gradient-to-r from-white to-gray-200 text-gray-800 rounded-2xl shadow-lg shrink-0">
          <div className="flex justify-between px-6 pt-6 mb-4">
            <div>
              <div className="text-xs opacity-70 mb-1 text-zinc-500">Balance</div>
              <div className="text-xl font-semibold">$5,756</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 35 35">
              <image width="35" height="35" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQXSURBVHgB7VdNbFRVFD7n3jtvZmAq7TQYF0aIsakK1p/QGAyGSqdTim6sCzRWE2FjNC7QHasu2LggrkwkYuzCkMjC2Bp/Om1lohhrY4my0xA7NdQYy8BrkXZ+3rvX740w/jBv3nsGFZJ+yWvvvec755577rnn3iFaQ2Nwo8GBgYGbSqVShyKVMsYwXSMwszHSLItfxPe507lLV8n/3Onv6b9Dsz4IpX5I2smQRT4O/0MYfGV8C1jkMY7xq7ncH05J78/w8LCwhPUKmsfgyIP434JPXWNH6LI9z24a8+wkTfs237b5s7n5uZ/qzihWj0P4BqhJ+m+RElJkOjZ1jJ4pnLE5m83eTA7NQbCO/icYNierbnVAGNcMXeWIpg/Gp8ZF7tMcex8Cm8LoHuz4dxQFhibZ8NbiUtFCe9SPBs6OuIx3c9+uvhkm7v6rlIpQ/tiQcbyuILFQpeqb2Mr1UstpyFsoGD9qobvA70Sy7oeRJ2Cz3Zet6ZASLLaATH9bkac0xJfzF04hOOqxRCnxcMkqfYShvUGeaNKHYLcdJj5H1yIToCDoPgGFUEkLx+5aji1vQGMuJH+eNW+DfSsMH7yUoJDHF9GZTp5NLmKSu8PwEZr7UbO+gN45CgnO7soOB5I0nzUVM8ZJ9rZ0HEOxIB14/zNY9woh1kF3L5xqugNGm4Kq6MpIkN18Pl9Aoj+DCQ6HcqS2ArqFqjTlGvc5JP8RjLQGaNgKlTdMDuBW4V5MsJGigGmr9ymtUojQiWZURDwv6DrCmjN+WHPGD97bokD/LlyHHNsiq9CMhHvPDv142t27u8vV7tNQepl+X0RTeJUX1fpwIpV4fWxs7CKFAPc90nciBO8SCx4p2sXRdGv6BdQcr/jJJvxFrfVg28a2Gfu8/RIqeAbOJZpNgAv7G4WV9lAYGHo0vSH9XutK69BScmkTRg74MB1hxPNyVZ62z9nfwv6d3u3HAVegNrqWwEGXex0wOGjH7X3IAS8ytg/ty5Ip5dz17pGaI2Fto8Z7zpynCEBZP6CUQrLx+w0JhkYstjphfJCiwNCy58xMNB1zK27hDjRnG8qVOYUQPhT2HVPXE2ZW4Oo+TtGgpJRJvOScRkLpyFXI4hQNFTzKJwSu93ew2h8iKC4iMgWcqHsaCZFPW5RQX1MUaDo+MTHxlcBbxZGu9N678yFV34q3xX9FTmQaCXFEn7JWrVnvSUDhcEom5YteAtfPW6YnswOGjmK/O5soFhLlRNdKfGU/fjG85sO56LpuL2xVUZum0ffdMkw/VTblJxGQ2tO0fjdN5idPVkxlG7bsWTj0CYgX6MqxN3QB40djydgDZat8O+rIQfJHC3Lqbcux5rWju5ELHyJK1drkzBrtBdh/F90923duz15xZA03DH4DnU6TJxYXXd4AAAAASUVORK5CYII=" />
            </svg>
          </div>
          <div className="mb-4 px-6">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                <div className="opacity-70 text-zinc-500">CARD HOLDER</div>
                <div className="text-black">Eddy Cusuma</div>
              </div>
              <div className="text-xs">
                <div className="opacity-70 text-zinc-500">VALID THRU</div>
                <div className="text-black">12/22</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between w-full border-t border-zinc-300 px-6 py-2 rounded-xl">
            <div className="text-base tracking-wider text-zinc-800">3778 **** **** 1234</div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 bg-zinc-700 opacity-60 rounded-full"></div>
              <div className="w-6 h-6 relative right-2 opacity-70 bg-zinc-700 rounded-full -ml-2"></div>
            </div>
          </div>
        </Card>

      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

