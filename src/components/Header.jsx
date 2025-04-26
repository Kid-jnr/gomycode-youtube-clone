import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import { IconButton, useTheme, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Header() {
  const theme = useTheme();
  const categories = [
    "All",
    "Music",
    "Gaming",
    "Live Streams",
    "Computer Programming",
    "Podcasts",
    "Sports",
    "News & Politics",
    "Science & Technology",
    "Education",
    "Travel",
    "Food & Cooking",
    "Art & Design",
    "Fashion & Beauty",
    "Fitness & Health",
    "Business & Finance",
    "Movies & Television",
    "Comedy",
    "DIY & Crafts",
    "Books & Literature",
    "Photography",
    "Cars & Motorcycles",
    "Animals & Pets",
    "History",
    "Philosophy",
  ];

  return (
    <div className="text-white w-full" style={{ backgroundColor: "#0f0f0f" }}>
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left Side - Menu and Logo */}
        <div className="flex items-center">
          <IconButton
            aria-label="fingerprint"
            sx={{ color: theme.palette.text.primary }}
          >
            <DensityMediumOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>

          <a href="#" className="flex items-center">
            <img src="logo.png"></img>
          </a>
        </div>

        {/* Middle - Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="flex w-full">
            <input
              style={{
                backgroundColor: "#0f0f0f",
                borderColor: theme.palette.text.background,
              }}
              type="text"
              placeholder="Search"
              className="w-full text-white border border-gray-800 rounded-l-full py-2 px-4 focus:outline-none focus:border-blue-500"
            />
            <button
              style={{
                backgroundColor: theme.palette.background.secondary,
                borderColor: theme.palette.text.background,
              }}
              className=" border rounded-r-full px-5 cursor-pointer"
            >
              <SearchIcon />
            </button>
          </div>
          <button
            style={{
              backgroundColor: theme.palette.background.secondary,
            }}
            className="ml-4 p-2 rounded-full hover:!bg-[rgba(255,255,255,0.2)] cursor-pointer"
          >
            <MicIcon />
          </button>
        </div>

        {/* Right Side - Icons */}
        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2 rounded-full hover:bg-gray-800"></button>

          <button
            className="md:flex cursor-pointer items-center justify-center rounded-full px-4 py-3 hover:!bg-[rgba(255,255,255,0.2)]"
            style={{
              backgroundColor: theme.palette.background.secondary,
            }}
          >
            <AddIcon sx={{ fontSize: 23 }} />
            <span className="ml-1 font-medium">Create</span>
          </button>

          <button className="relative p-2 cursor-pointer rounded-full hover:bg-[rgba(255,255,255,0.2)]">
            <NotificationsNoneIcon sx={{ fontSize: 28 }} />
          </button>

          <button className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
            <div className="bg-purple-600 w-full h-full flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="flex items-center pl-4 pr-2 py-2 border-b border-gray-800 overflow-x-auto">
        <div className="flex items-center space-x-1 overflow-x-auto scrollbar-hide no-scrollbar">
          {categories.map((category) => (
            <button
              style={{
                backgroundColor: theme.palette.background.secondary,
              }}
              className="whitespace-nowrap cursor-pointer hover:!bg-[rgba(255,255,255,0.2)] text-white px-3 py-1 rounded-lg text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
