import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getStoriesIds, getStory } from '../api/api';
import { StoryType } from '../types/types';
import { storyState } from '../store/storyReducer/types';

const initialState: storyState = {
  stories: [],
  story: {
    by: '',
    descendants: undefined,
    id: undefined,
    kids: [],
    score: undefined,
    time: undefined,
    title: '',
    type: '',
    url: ''
  },
  loading: false,
  error: null
};

export const fetchStories = createAsyncThunk(
  'story/fetchStories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getStoriesIds();

      const promises = data
        .slice(0, 100)
        .map((storyId: number) => getStory(storyId));

      const result: StoryType[] = await Promise.all(promises);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateStories = createAsyncThunk(
  'story/updateStories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getStoriesIds();

      const promises = data
        .slice(0, 100)
        .map((storyId: number) => getStory(storyId));

      const result: StoryType[] = await Promise.all(promises);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchStory = createAsyncThunk(
  'story/fetchStory',
  async (id: number, { rejectWithValue }) => {
    try {
      return await getStory(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateStory = createAsyncThunk(
  'story/updateStory',
  async (id: number, { rejectWithValue }) => {
    try {
      return await getStory(id);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    fetchingStories: (state) => {
      state.loading = true;
    },
    fetchStoriesSuccess: (state, action: PayloadAction<StoryType[]>) => {
      state.loading = true;
      state.stories = action.payload;
    },
    fetchStoriesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchStorySuccess: (state, action: PayloadAction<StoryType>) => {
      state.loading = false;
      state.story = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchStories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.loading = false;
      state.stories = action.payload;
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.loading = false;
      // @ts-ignore
      state.error = action.payload;
    });
    builder.addCase(updateStories.rejected, (state, action) => {
        state.loading = false;
        // @ts-ignore
        state.error = action.payload;
      }
    );
    builder.addCase(fetchStory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchStory.fulfilled, (state, action) => {
      state.loading = false;
      state.story = action.payload;
    });
  },
});

export const { fetchingStories, fetchStoriesSuccess, fetchStoriesError, fetchStorySuccess } = storySlice.actions;
export default storySlice.reducer;