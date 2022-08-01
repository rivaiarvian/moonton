import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";

function Create({ auth }) {
    const { setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <Label className="mt-4">Name</Label>
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.name}
                />
                <Label className="mt-4">Category</Label>
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.category}
                />
                <Label className="mt-4">Video URL</Label>
                <Input
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.video_url}
                />
                <Label className="mt-4">Thumbnail</Label>
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    placeholder="Insert thumbnail of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.thumbnail}
                />
                <Label className="mt-4">Rating</Label>
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    placeholder="Enter the rating url of the movie"
                    isFocused={true}
                    handleChange={onHandleChange}
                    isError={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <Label className="mt-1 mr-3">Is Featured</Label>
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <Button type="submit" className=" mt-4" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}

export default Create;
