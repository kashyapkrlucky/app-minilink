
import React, { useState } from "react";
import AppButton from "../components/Common/AppButton";
import AppInput from '../components/Common/AppInput';
import AppSelect from '../components/Common/AppSelect';
import Avatar from '../components/Common/Avatar';
import DeleteItem from "../components/Common/DeleteItem";
import NoResults from "../components/Common/NoResults";
import AppCheckbox from "../components/Common/AppCheckbox";
import AppRadio from "../components/Common/AppRadio";
import AppToggle from "../components/Common/AppToggle";
import { AppBadge, AppChip } from "../components/Common/AppBadgeChip";
import AppTooltip from "../components/Common/AppTooltip";
import { AppCard, AppContainer, AppDivider, AppFlex, AppGrid, AppModal, AppNavbar, AppProgressBar, AppSkeleton, AppSpinner, AppWrapper } from "../components/Layout/Containers";
import AppAlert from "../components/Common/AppAlert";
import AppToast from "../components/Common/AppToast";
import AppSidebar from "../components/Layout/AppSidebar";
import AppBreadcrumbs from "../components/Common/AppBreadcrumbs";
import AppTabs from "../components/Common/AppTabs";
import AppPagination from "../components/Common/AppPagination";
import AppStepper from "../components/Common/AppStepper";
import AppTable from "../components/Layout/AppTable";
import AppDataList from "../components/Common/AppDataList";
import AppAccordion from "../components/Common/AppAccordion";
import AppFileUpload from "../components/Common/AppFileUpload";
import AppMultiSelect from "../components/Common/AppMultiSelect";
import AppFormValidation from "../components/Common/AppFormValidation";
import AppDrawer from "../components/Layout/AppDrawer";
import AppClipboard from "../components/Common/AppClipboard";
import AppThemeToggle from "../components/Common/AppThemeToggle";


function Examples() {
    const options = [
        { id: "apple", name: "Apple" },
        { id: "banana", name: "Banana" },
        { _id: "cherry", value: "Cherry" },
    ];
    const users = [
        { fullName: "Alice Johnson", avatar: "1.png" },
        { fullName: "Bob Smith", avatar: "" },
        { fullName: "Charlie Brown", avatar: "2.png" },
        { fullName: "Diana Ross" }, // No avatar
        { fullName: "" }, // No name or avatar
    ];

    const [items, setItems] = useState([
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
    ]);

    const handleDelete = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const [isChecked, setIsChecked] = useState(false);
    const [selectedRadio, setSelectedRadio] = useState("option1");

    const [isOn, setIsOn] = useState(false);

    const [chips, setChips] = useState(["React", "Tailwind", "UI Kit"]);

    const [showAlert, setShowAlert] = useState(true);

    const removeChip = (label) => {
        setChips(chips.filter((chip) => chip !== label));
    };
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000); // Auto-hide after 3 seconds
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);


    const steps = ["Step 1", "Step 2", "Step 3"];
    const [currentStep, setCurrentStep] = useState(0);

    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "age", label: "Age" },
    ];

    const data = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
    ];


    const dataItems = [
        { title: "Item 1", description: "This is the first item" },
        { title: "Item 2", description: "This is the second item" },
        { title: "Item 3", description: "This is the third item" },
    ];


    const selectOptions = ["Apple", "Banana", "Cherry"];
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <div className="bg-background flex flex-col items-center gap-8 p-10">
            {/* Buttons */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Buttons</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <AppButton variant="primary" size="sm">Primary SM</AppButton>
                    <AppButton variant="secondary" size="md">Secondary MD</AppButton>
                    <AppButton variant="outline" size="md">Outline MD</AppButton>
                    <AppButton variant="primary" size="lg" disabled>Disabled LG</AppButton>
                </div>
            </div>

            {/* Inputs */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Inputs</h2>
                <div className="grid grid-cols-3 gap-4">
                    <AppInput placeholder="Default Input" />
                    <AppInput variant="filled" placeholder="Filled Input" />
                    <AppInput variant="outline" placeholder="Outlined Input" />
                    <AppInput size="sm" placeholder="Small Input" />
                    <AppInput size="md" placeholder="Medium Input" />
                    <AppInput size="lg" placeholder="Large Input" />
                    <AppInput error="This field is required" placeholder="Error Input" />
                    <AppInput disabled placeholder="Disabled Input" />
                    <AppInput type="password" placeholder="Password" />
                    <AppInput type="email" placeholder="Email Address" />
                    <AppInput type="number" placeholder="Enter Number" />
                    <AppInput className="bg-yellow-100" placeholder="Custom Styled Input" />
                </div>
            </div>

            {/* Selects */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Selects</h2>
                <div className="grid grid-cols-3 gap-4">
                    <AppSelect options={options} placeholder="Choose a fruit" />
                    <AppSelect variant="filled" options={options} placeholder="Choose a fruit" />
                    <AppSelect variant="outline" options={options} placeholder="Choose a fruit" />
                    <AppSelect size="sm" options={options} placeholder="Choose a fruit" />
                    <AppSelect size="md" options={options} placeholder="Choose a fruit" />
                    <AppSelect size="lg" options={options} placeholder="Choose a fruit" />
                    <AppSelect error="Please select an option" options={options} placeholder="Choose a fruit" />
                    <AppSelect disabled options={options} placeholder="Choose a fruit" />
                </div>
            </div>

            {/* Avatars */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Avatars</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Avatar user={users[0]} size="sm" />
                    <Avatar user={users[1]} size="md" />
                    <Avatar user={users[2]} size="lg" />
                    <Avatar user={users[3]} size="xl" />
                    <Avatar user={users[4]} size="md" />
                </div>
            </div>

            {/* Lists */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Item List</h2>
                <ul className="space-y-3">
                    {items.map((item) => (
                        <li key={item.id} className="flex justify-between items-center bg-white shadow-md p-3 rounded-md">
                            <span className="text-gray-700">{item.name}</span>
                            <DeleteItem deleteFeed={handleDelete} id={item.id} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Alerts & Toasts */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Alerts & Toasts</h2>
                <div className="space-y-4">
                    {showAlert && (
                        <AppAlert type="success" message="Action completed successfully!" onClose={() => setShowAlert(false)} />
                    )}
                    <AppAlert type="warning" message="Be careful! Check your inputs." />
                    <AppAlert type="error" message="Something went wrong. Try again!" />
                    <AppAlert type="info" message="Here is some important information." />
                </div>
                <div className="p-6">
                    <button onClick={handleShowToast} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Show Toast
                    </button>
                    {showToast && (
                        <AppToast type="success" message="Your changes have been saved successfully!" duration={3000} position="top-right" />
                    )}
                </div>
            </div>


            {/* Alerts & Toasts */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">No Results</h2>
                <NoResults content="No items found!" theme="empty" />
                <NoResults content="Try searching for something else!" theme="search" />
                <NoResults content="Oops! Nothing here." theme="default" />
            </div>

            {/* Checkbox & Radio */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Checkbox & Radio</h2>
                <AppCheckbox
                    label="Accept Terms"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                />

                <div className="flex flex-row items-center gap-3 mt-3">
                    <AppRadio
                        label="Option 1"
                        name="example"
                        checked={selectedRadio === "option1"}
                        onChange={() => setSelectedRadio("option1")}
                    />
                    <AppRadio
                        label="Option 2"
                        name="example"
                        checked={selectedRadio === "option2"}
                        onChange={() => setSelectedRadio("option2")}
                    />
                </div>
            </div>


            {/* Badges & Chips */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Badges & Chips</h2>
                <div className="flex flex-row items-center gap-3 my-3">
                    <AppBadge label="New" variant="info" />
                    <AppBadge label="Success" variant="success" />
                    <AppBadge label="Warning" variant="warning" />
                    <AppBadge label="Danger" variant="danger" />
                    <div className="flex space-x-2">
                        {chips.map((chip) => (
                            <AppChip key={chip} label={chip} className={'bg-gray-100'} onRemove={() => removeChip(chip)} />
                        ))}
                    </div>
                </div>
            </div>


            {/* Tooltips */}
            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Tooltips</h2>
                <div className="flex flex-row items-center gap-3 my-3">
                    <AppTooltip text="This is a tooltip" position="top">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">Hover Me</button>
                    </AppTooltip>

                    <AppTooltip text="Left Tooltip" position="left">
                        <span className="px-3 py-1 bg-gray-300 rounded">Hover</span>
                    </AppTooltip>
                </div>
            </div>

            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Other Form Controls</h2>
                <div className="flex flex-col items-center gap-3 my-3">
                    <AppToggle label="Enable Notifications" checked={isOn} onChange={() => setIsOn(!isOn)} />
                    <AppMultiSelect
                        options={selectOptions}
                        selectedOptions={selectedOptions}
                        setSelectedOptions={setSelectedOptions}
                    />
                    <AppFormValidation errorMessage="This field is required" />
                    <AppFormValidation successMessage="Form submitted successfully!" />
                    <AppFileUpload onUpload={(file) => console.log("Uploaded file:", file)} />

                </div>
            </div>

            <div className="w-full max-w-3xl">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Containers</h2>
                <div className="flex flex-col items-center gap-3 my-3">
                    <AppContainer>
                        <AppWrapper>
                            <h2 className="text-lg font-semibold">Welcome to the UI Kit!</h2>
                            <p className="text-gray-600">This is a sample container and wrapper.</p>
                        </AppWrapper>
                    </AppContainer>

                    <AppContainer>
                        <AppCard header="Card Header" footer="Card Footer">
                            <p className="text-gray-600">This is a basic card with a header and footer.</p>
                        </AppCard>

                        <AppCard onClick={() => alert("Card Clicked!")} className="mt-4">
                            <p className="text-gray-600">This is a clickable card.</p>
                        </AppCard>
                    </AppContainer>

                    <AppContainer>
                        <AppGrid cols={3} gap={6}>
                            <AppCard>Item 1</AppCard>
                            <AppCard>Item 2</AppCard>
                            <AppCard>Item 3</AppCard>
                        </AppGrid>

                        <AppFlex align="center" justify="between" className="mt-6">
                            <AppCard>Left</AppCard>
                            <AppCard>Right</AppCard>
                        </AppFlex>
                    </AppContainer>

                    <AppContainer>
                        <AppCard>Above Divider</AppCard>
                        <AppDivider text="OR" className="my-4" />
                        <AppCard>Below Divider</AppCard>
                    </AppContainer>
                    <AppNavbar
                        brand="MyApp"
                        links={[
                            { label: "Home", href: "/" },
                            { label: "About", href: "/about" },
                            { label: "Contact", href: "/contact" }
                        ]}
                    />

                    <AppSidebar
                        links={[
                            { label: "Dashboard", href: "/dashboard" },
                            { label: "Settings", href: "/settings" },
                            { label: "Profile", href: "/profile" }
                        ]}
                    />



                    <AppDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <p>Drawer Content Here</p>
                    </AppDrawer>

                    <button onClick={() => setIsDrawerOpen(true)}>Open Drawer</button>
                </div>
            </div>

            {/* Other Components */}
            <div className="w-full max-w-3xl flex flex-col gap-2">
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Progress Bar</h2>
                <AppProgressBar progress={70} />
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Table</h2>
                <AppTable columns={columns} data={data} sortable={true} filterable={true} />
                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Accordion</h2>
                <AppAccordion title="Click to Expand">
                    <p>This is the content inside the accordion. It can contain text, images, or even other components.</p>
                </AppAccordion>

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Spinners</h2>
                <div className="flex flex-row items-center gap-4">
                    <AppSpinner size="8" color="blue-500" />
                    <AppSpinner size="6" color="red-500" />
                    <AppSpinner size="4" color="green-500" />
                </div>

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Skeleton Images or Text</h2>
                <AppSkeleton height="6" width="full" className="mb-4" />

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Modal</h2>
                <AppButton onClick={() => setIsModalOpen(true)}>Open Modal</AppButton>

                <AppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirmation">
                    <p>Are you sure you want to proceed?</p>
                </AppModal>

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Breadcrumbs</h2>
                <AppBreadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Dashboard", href: "/dashboard" },
                        { label: "Settings", href: "/settings" }
                    ]}
                />

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Tabs</h2>
                <AppTabs
                    tabs={[
                        { label: "Tab 1", content: <div>Content for Tab 1</div> },
                        { label: "Tab 2", content: <div>Content for Tab 2</div> },
                        { label: "Tab 3", content: <div>Content for Tab 3</div> }
                    ]}
                    activeIndex={activeTab}
                    onTabChange={setActiveTab}
                />


                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Pagination</h2>
                <AppPagination
                    totalPages={10}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />


                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Stepper</h2>
                <AppStepper steps={steps} currentStep={currentStep} />
                <button onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}>Next</button>
                <button onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}>Previous</button>

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Datalist</h2>
                <AppDataList data={dataItems} />

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Copy Text</h2>
                <AppClipboard text="Hello, this text is copied!" />

                <h2 className="text-lg font-semibold mb-2 text-foreground bg-purple-200 p-2">Theme Toggler</h2>
                <AppThemeToggle />

            </div>
        </div>
    )
}

export default Examples